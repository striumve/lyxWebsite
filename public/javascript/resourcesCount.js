async function countResources(url, mode) {
    // mode = 1: Get all kinds of resources(images, audios, fonts, cursors)
    // mode = 2: Get images and audios only
    try {
        // 读取HTML文件内容
        const response = await fetch(url);
        const htmlContent = await response.text();

        // 使用正则表达式匹配所有 .png 和 .jpg 文件
        const png = htmlContent.match(/[^"'\s]+\.png/gi) || [];
        const jpg = htmlContent.match(/[^"'\s]+\.jpg/gi) || [];
        const jpeg = htmlContent.match(/[^"'\s]+\.jpeg/gi) || [];
        const webp = htmlContent.match(/[^"'\s]+\.webp/gi) || [];
        const mp3 = htmlContent.match(/[^"'\s]+\.mp3/gi) || [];
        const wav = htmlContent.match(/[^"'\s]+\.wav/gi) || [];
        const woff = htmlContent.match(/[^"'\s]+\.woff/gi) || [];
        const otf = htmlContent.match(/[^"'\s]+\.otf/gi) || [];
        const ttf = htmlContent.match(/[^"'\s]+\.ttf/gi) || [];
        const cur = htmlContent.match(/[^"'\s]+\.cur/gi) || [];

        switch (mode) {
            case 1:
                // 去重（因为同一个图片可能被引用多次）
                const res1 = [...new Set([...png, ...jpg, ...jpeg, ...webp, ...mp3, ...wav, ...woff, ...otf, ...ttf, ...cur])];
                // 统计
                const count1 = res1.length;
                console.log('模式：所有资源');
                console.log('数量:', count1);
                console.log('列表:', res1);
                return count1;
            case 2:
                const res2 = [...new Set([...png, ...jpg, ...jpeg, ...webp, ...mp3, ...wav])];
                const count2 = res2.length;
                console.log('模式：图片和音频');
                console.log('数量:', count2);
                console.log('列表:', res2);
                return count2;
            default:
                break;
        }

    } catch (error) {
        console.error('读取文件失败:', error);
        // document.getElementById('result').innerHTML = '读取失败: ' + error.message;
    }
}