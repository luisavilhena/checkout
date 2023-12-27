const context = require.context('./Imgs', false, /\.(png|jpg|jpeg)$/);
const imagens = {};

context.keys().forEach((imagemPath) => {
    const dish1 = imagemPath.replace('./', '').replace(/\.(png|jpg|jpeg)$/, '');
    const dish2 = imagemPath.replace('./', '').replace(/\.(png|jpg|jpeg)$/, '');
    const dish3 = imagemPath.replace('./', '').replace(/\.(png|jpg|jpeg)$/, '');
    const dish4 = imagemPath.replace('./', '').replace(/\.(png|jpg|jpeg)$/, '');
    const dish5 = imagemPath.replace('./', '').replace(/\.(png|jpg|jpeg)$/, '');
    const dish6 = imagemPath.replace('./', '').replace(/\.(png|jpg|jpeg)$/, '');

    imagens[dish1, dish2, dish3, dish4, dish5, dish6] = context(imagemPath);

});

export default imagens;