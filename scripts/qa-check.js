#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔍 Iniciando verificações de QA...\n');

let hasErrors = false;

// 1. TypeScript compilation check
console.log('📝 Verificando compilação TypeScript...');
try {
  execSync('npx tsc --noEmit', { stdio: 'pipe' });
  console.log('✅ TypeScript OK\n');
} catch (error) {
  console.log('❌ Erros de TypeScript encontrados:');
  console.log(error.stdout.toString());
  hasErrors = true;
}

// 2. ESLint check
console.log('🔍 Verificando ESLint...');
try {
  execSync('npx eslint src --ext .ts,.tsx', { stdio: 'pipe' });
  console.log('✅ ESLint OK\n');
} catch (error) {
  console.log('❌ Erros de ESLint encontrados:');
  console.log(error.stdout.toString());
  hasErrors = true;
}

// 3. Check for missing imports
console.log('📦 Verificando imports ausentes...');
const checkMissingImports = (dir) => {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      checkMissingImports(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for common missing imports
      const patterns = [
        { pattern: /<Link/g, import: "import Link from 'next/link';" },
        { pattern: /<Head/g, import: "import Head from 'next/head';" },
        { pattern: /useState/g, import: "import { useState } from 'react';" },
        { pattern: /useEffect/g, import: "import { useEffect } from 'react';" },
      ];
      
      patterns.forEach(({ pattern, import: requiredImport }) => {
        if (pattern.test(content) && !content.includes(requiredImport.split(' ')[1])) {
          console.log(`⚠️  ${filePath}: Possível import ausente - ${requiredImport}`);
        }
      });
    }
  });
};

checkMissingImports(path.join(__dirname, '../src'));

// 4. Check for incorrect link usage
console.log('🔗 Verificando uso incorreto de links...');
const checkIncorrectLinks = (dir) => {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      checkIncorrectLinks(filePath);
    } else if (file.endsWith('.tsx')) {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for <a href="/..."> instead of <Link>
      const internalLinks = content.match(/<a\s+href=["']\/[^"']*["']/g);
      if (internalLinks) {
        console.log(`❌ ${filePath}: Use <Link> ao invés de <a> para links internos:`);
        internalLinks.forEach(link => console.log(`   ${link}`));
        hasErrors = true;
      }
    }
  });
};

checkIncorrectLinks(path.join(__dirname, '../src'));

// 5. Check for unused imports (basic)
console.log('🧹 Verificando imports não utilizados...');
const checkUnusedImports = (dir) => {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      checkUnusedImports(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Extract imports from lucide-react
      const lucideImportMatch = content.match(/import\s*\{\s*([^}]+)\s*\}\s*from\s*['"]lucide-react['"]/);
      if (lucideImportMatch) {
        const imports = lucideImportMatch[1]
          .split(',')
          .map(imp => imp.trim())
          .filter(imp => imp);
        
        imports.forEach(importName => {
          const regex = new RegExp(`<${importName}\\b`, 'g');
          if (!regex.test(content)) {
            console.log(`⚠️  ${filePath}: Import possivelmente não utilizado - ${importName}`);
          }
        });
      }
    }
  });
};

checkUnusedImports(path.join(__dirname, '../src'));

// 6. Try to build
console.log('🏗️  Verificando build...');
try {
  execSync('npm run build', { stdio: 'pipe' });
  console.log('✅ Build OK\n');
} catch (error) {
  console.log('❌ Erro no build:');
  console.log(error.stdout.toString());
  hasErrors = true;
}

// Summary
console.log('\n' + '='.repeat(50));
if (hasErrors) {
  console.log('❌ QA Check FALHOU - Corrija os erros acima');
  process.exit(1);
} else {
  console.log('✅ QA Check PASSOU - Tudo funcionando!');
  process.exit(0);
}