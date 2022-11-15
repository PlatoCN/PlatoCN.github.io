//跟随模式
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: true, //自动播放
    audio: [
	{
        name: 'Last Flowers',
        artist: 'Radiohead',
        url: 'https://music.163.com/song?id=428423136&userid=1663778995',
        cover: '',
    }, 
	]
});

//普通模式
// const ap = new APlayer({
    // container: document.getElementById('aplayer'),
    // audio: [{
        // name: '',
        // artist: '',
        // url: '',
        // cover: '',
    // }]
// });
