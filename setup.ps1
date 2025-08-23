#!/usr/bin/env pwsh
# ==============================================================================
# 詠楙企業網站專案 - 初始化腳本 (Windows PowerShell)
# 執行方式：在 PowerShell 中執行
#   Set-ExecutionPolicy -Scope Process Bypass
#   ./setup.ps1
# ==============================================================================

$ErrorActionPreference = "Stop"

Write-Host "🚀 開始初始化詠楙企業網站專案..."

# 1) Monorepo 結構
Write-Host "📦 建立 Monorepo 結構..."
New-Item -ItemType Directory -Force -Path "yongmao-site/packages/web" | Out-Null
New-Item -ItemType Directory -Force -Path "yongmao-site/packages/studio" | Out-Null
New-Item -ItemType Directory -Force -Path "yongmao-site/docs" | Out-Null
Set-Location "yongmao-site"

# 2) npm workspaces
Write-Host "🔧 設定 npm 工作區..."
@'
{
  "name": "yongmao-monorepo",
  "private": true,
  "workspaces": [
    "packages/*"
  ],
  "scripts": {
    "web": "npm run dev -w packages/web",
    "studio": "npm run dev -w packages/studio"
  }
}
'@ | Set-Content -Encoding UTF8 "package.json"

# 3) Next.js app
Write-Host "🌐 建立 Next.js (web)..."
Set-Location "packages/web"
npx create-next-app@latest . --ts --tailwind --eslint --app --src-dir --import-alias "@/*" --no-git

New-Item -ItemType Directory -Force -Path "src/components","src/lib","src/styles" | Out-Null

@'
export default function TailwindTest() {
  return (
    <div className="p-8 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold text-blue-600">Tailwind CSS 測試</h2>
      <p className="mt-2 text-gray-700">如果這段文字是藍色，代表 Tailwind CSS 已成功設定！</p>
    </div>
  );
}
'@ | Set-Content -Encoding UTF8 "src/components/TailwindTest.tsx"

@'
import TailwindTest from "@/components/TailwindTest";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">詠楙企業網站</h1>
        <TailwindTest />
      </div>
    </main>
  );
}
'@ | Set-Content -Encoding UTF8 "src/app/page.tsx"

Set-Location ../..

# 4) Sanity Studio
Write-Host "🧰 初始化 Sanity Studio..."
Set-Location "packages/studio"

if (-not (Get-Command sanity -ErrorAction SilentlyContinue)) {
  Write-Host "未找到 Sanity CLI，正在全域安裝..."
  npm install -g @sanity/cli | Out-Null
}

Write-Host "Sanity CLI 可能需要您登入與互動選項。"
Read-Host "準備好開始設定 Sanity Studio 了嗎？按 Enter 繼續..."

sanity init --coupon bmad-method

New-Item -ItemType Directory -Force -Path "schemas" | Out-Null

@'
export default {
  name: 'post',
  title: '文章',
  type: 'document',
  fields: [
    { name: 'title', title: '標題', type: 'string', validation: (Rule: any) => Rule.required() },
    {
      name: 'slug',
      title: '網址代稱 (Slug)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    { name: 'mainImage', title: '主要圖片', type: 'image', options: { hotspot: true } },
    { name: 'publishedAt', title: '發布日期', type: 'datetime', validation: (Rule: any) => Rule.required() },
    { name: 'body', title: '內文', type: 'blockContent', validation: (Rule: any) => Rule.required() }
  ],
}
'@ | Set-Content -Encoding UTF8 "schemas/post.ts"

@'
export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' }
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }, { title: 'Number', value: 'number' }],
      marks: {
        decorators: [{ title: 'Strong', value: 'strong' }, { title: 'Emphasis', value: 'em' }],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [{ title: 'URL', name: 'href', type: 'url' }]
          }
        ]
      }
    },
    { type: 'image', options: { hotspot: true } }
  ]
}
'@ | Set-Content -Encoding UTF8 "schemas/blockContent.ts"

@'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import post from './schemas/post'
import blockContent from './schemas/blockContent'

export default defineConfig({
  name: 'default',
  title: 'Yongmao Studio',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  plugins: [deskTool()],
  schema: { types: [post, blockContent] },
})
'@ | Set-Content -Encoding UTF8 "sanity.config.ts"

Set-Location ../..

# 5) Git 初始化
Write-Host "🔐 設定 Git 版本控制..."
git init | Out-Null
@'
# Dependencies
node_modules
.pnp
.pnp.js

# Build outputs
.next/
dist/
build/

# Sanity
.sanity/
*.log

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDEs
.vscode/
.idea/
'@ | Set-Content -Encoding UTF8 ".gitignore"

git add . | Out-Null
git commit -m "feat: 初始化專案基礎建設" | Out-Null
git branch -M main
git branch develop
git checkout develop

Write-Host "✅ 專案初始化完成！`n"
Write-Host "您可以開始開發了："
Write-Host "cd yongmao-site"
Write-Host "npm run web     # 啟動 Next.js 前端 (http://localhost:3000)"
Write-Host "npm run studio  # 啟動 Sanity Studio (http://localhost:3333)"
Write-Host "`n目前的 Git 分支是 'develop'。祝您開發順利！"