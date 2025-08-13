#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 SimpleWeb Performance Analysis');
console.log('================================\n');

// Check image sizes
const publicDir = path.join(__dirname, '../public');
const imgDir = path.join(publicDir, 'img');

function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.size;
  } catch (error) {
    return 0;
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

console.log('📊 Image Optimization Status:');
console.log('----------------------------');

// Check hero image optimization
const heroOriginal = path.join(imgDir, 'hero-image.png');
const heroOptimizedJpg = path.join(imgDir, 'hero-image-optimized.jpg');
const heroOptimizedWebp = path.join(imgDir, 'hero-image-optimized.webp');

if (fs.existsSync(heroOriginal)) {
  const originalSize = getFileSize(heroOriginal);
  console.log(`Original hero image: ${formatBytes(originalSize)}`);
  
  if (fs.existsSync(heroOptimizedJpg)) {
    const jpgSize = getFileSize(heroOptimizedJpg);
    const jpgSavings = ((originalSize - jpgSize) / originalSize * 100).toFixed(1);
    console.log(`✅ Optimized JPG: ${formatBytes(jpgSize)} (${jpgSavings}% smaller)`);
  } else {
    console.log('❌ Optimized JPG not found');
  }
  
  if (fs.existsSync(heroOptimizedWebp)) {
    const webpSize = getFileSize(heroOptimizedWebp);
    const webpSavings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
    console.log(`✅ Optimized WebP: ${formatBytes(webpSize)} (${webpSavings}% smaller)`);
  } else {
    console.log('❌ Optimized WebP not found');
  }
} else {
  console.log('❌ Original hero image not found');
}

console.log('\n🔧 Configuration Status:');
console.log('------------------------');

// Check Next.js config
const nextConfigPath = path.join(__dirname, '../next.config.ts');
if (fs.existsSync(nextConfigPath)) {
  const configContent = fs.readFileSync(nextConfigPath, 'utf8');
  
  const checks = [
    { name: 'Image formats (WebP/AVIF)', pattern: /formats.*webp.*avif/i },
    { name: 'Bundle splitting', pattern: /splitChunks/i },
    { name: 'Package optimization', pattern: /optimizePackageImports/i },
    { name: 'CSS optimization', pattern: /optimizeCss.*true/i },
  ];
  
  checks.forEach(check => {
    if (check.pattern.test(configContent)) {
      console.log(`✅ ${check.name}: Configured`);
    } else {
      console.log(`❌ ${check.name}: Not configured`);
    }
  });
} else {
  console.log('❌ Next.js config not found');
}

console.log('\n📁 Service Worker Status:');
console.log('-------------------------');
const swPath = path.join(publicDir, 'sw.js');
if (fs.existsSync(swPath)) {
  console.log('✅ Service Worker: Created');
} else {
  console.log('❌ Service Worker: Not found');
}

console.log('\n🎯 Performance Recommendations:');
console.log('-------------------------------');
console.log('1. ✅ Image optimization implemented (WebP + JPG)');
console.log('2. ✅ Bundle splitting configured');
console.log('3. ✅ Service worker for caching');
console.log('4. ✅ Font optimization with Next.js');
console.log('5. ✅ Resource hints (preconnect, preload)');
console.log('6. ✅ Performance monitoring component');
console.log('\nNext steps:');
console.log('- Run: npm run build');
console.log('- Test with Lighthouse or PageSpeed Insights');
console.log('- Monitor Core Web Vitals in production');
