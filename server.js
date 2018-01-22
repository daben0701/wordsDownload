import Koa from 'koa';
import KoaStatic from 'koa-static';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import graphqlRouter from './router';
import download from 'download';
import fr from 'follow-redirects';
import fs from 'fs';

const http = fr.http;

let word = "";

function getWord() {
    for (let i = 2; i <= 10; i++) {
        switch (i) {
            case 2:
                word2();
                break;
            case 3:
                word3();
                break;
            case 4:
                word4();
                break;
            case 5:
                word5();
                break;
            case 6:
                word6();
                break;
            case 7:
                word7();
                break;
            case 8:
                word8();
                break;
            case 9:
                word9();
                break;
            case 10:
                word10();
                break;
        }
    }
}


const testWord = async function (word) {
    var re = await http.get("http://baicizhan.qiniucdn.com/word_audios/" + word + ".mp3", (res, cb) => {
        if (res.statusCode !== 404) {
            let saveMedia = fs.createWriteStream('./dist/' + word + '.mp3');
            res.pipe(saveMedia);
            saveMedia.on('finish', () => {
                console.log(word + "  finish");
            });
        } else {
            console.log(word + "  not a word!");
        }

    });

    return re;
}

const word2 = function () {
    let a = new Array(3).join('a').split(''),
        b = 'a'.charCodeAt(), c = 'a'.charCodeAt();
    for (let i = 0; i < 26; i++) {
        a[0] = String.fromCharCode(b + i);
        for (let j = 0; j < 26; j++) {
            a[1] = String.fromCharCode(c + j);
            testWord(a.join(''));
        }
    }
}

const word3 = function () {
    let a = new Array(4).join('a').split(''),
        b = 'a'.charCodeAt(), c = 'a'.charCodeAt(), d = 'a'.charCodeAt();
    for (let i = 0; i < 26; i++) {
        a[0] = String.fromCharCode(b + i);
        for (let j = 0; j < 26; j++) {
            a[1] = String.fromCharCode(c + j);
            for (let k = 0; k < 26; k++) {
                a[2] = String.fromCharCode(d + k);
                testWord(a.join(''));
            }
        }
    }
}

const word4 = function () {
    let a = new Array(5).join('a').split(''),
        b = 'a'.charCodeAt(), c = 'a'.charCodeAt(), d = 'a'.charCodeAt(),
        e = 'a'.charCodeAt();
    for (let i = 0; i < 26; i++) {
        a[0] = String.fromCharCode(b + i);
        for (let j = 0; j < 26; j++) {
            a[1] = String.fromCharCode(c + j);
            for (let k = 0; k < 26; k++) {
                a[2] = String.fromCharCode(d + k);
                for (let l = 0; l < 26; l++) {
                    a[3] = String.fromCharCode(e + l);
                    testWord(a.join(''));
                }
            }
        }
    }
}

const word5 = function () {
    let a = new Array(6).join('a').split(''),
        b = 'a'.charCodeAt(), c = 'a'.charCodeAt(), d = 'a'.charCodeAt(),
        e = 'a'.charCodeAt(), f = 'a'.charCodeAt();
    for (let i = 0; i < 26; i++) {
        a[0] = String.fromCharCode(b + i);
        for (let j = 0; j < 26; j++) {
            a[1] = String.fromCharCode(c + j);
            for (let k = 0; k < 26; k++) {
                a[2] = String.fromCharCode(d + k);
                for (let l = 0; l < 26; l++) {
                    a[3] = String.fromCharCode(e + l);
                    for (let m = 0; m < 26; m++) {
                        a[4] = String.fromCharCode(f + m);
                        testWord(a.join(''));
                    }
                }
            }
        }
    }
}

const word6 = function () {
    let a = new Array(7).join('a').split(''),
        b = 'a'.charCodeAt(), c = 'a'.charCodeAt(), d = 'a'.charCodeAt(),
        e = 'a'.charCodeAt(), f = 'a'.charCodeAt(), g = 'a'.charCodeAt();
    for (let i = 0; i < 26; i++) {
        a[0] = String.fromCharCode(b + i);
        for (let j = 0; j < 26; j++) {
            a[1] = String.fromCharCode(c + j);
            for (let k = 0; k < 26; k++) {
                a[2] = String.fromCharCode(d + k);
                for (let l = 0; l < 26; l++) {
                    a[3] = String.fromCharCode(e + l);
                    for (let m = 0; m < 26; m++) {
                        a[4] = String.fromCharCode(f + m);
                        for (let n = 0; n < 26; n++) {
                            a[5] = String.fromCharCode(g + n);
                            testWord(a.join(''));
                        }
                    }
                }
            }
        }
    }
}

const word7 = function () {
    let a = new Array(8).join('a').split(''),
        b = 'a'.charCodeAt(), c = 'a'.charCodeAt(), d = 'a'.charCodeAt(),
        e = 'a'.charCodeAt(), f = 'a'.charCodeAt(), g = 'a'.charCodeAt(),
        h = 'a'.charCodeAt();
    for (let i = 0; i < 26; i++) {
        a[0] = String.fromCharCode(b + i);
        for (let j = 0; j < 26; j++) {
            a[1] = String.fromCharCode(c + j);
            for (let k = 0; k < 26; k++) {
                a[2] = String.fromCharCode(d + k);
                for (let l = 0; l < 26; l++) {
                    a[3] = String.fromCharCode(e + l);
                    for (let m = 0; m < 26; m++) {
                        a[4] = String.fromCharCode(f + m);
                        for (let n = 0; n < 26; n++) {
                            a[5] = String.fromCharCode(g + n);
                            for (let o = 0; o < 26; o++) {
                                a[6] = String.fromCharCode(h + o);
                                testWord(a.join(''));
                            }
                        }
                    }
                }
            }
        }
    }
}

const word8 = function () {
    let a = new Array(9).join('a').split(''),
        b = 'a'.charCodeAt(), c = 'a'.charCodeAt(), d = 'a'.charCodeAt(),
        e = 'a'.charCodeAt(), f = 'a'.charCodeAt(), g = 'a'.charCodeAt(),
        h = 'a'.charCodeAt(), i1 = 'a'.charCodeAt();
    for (let i = 0; i < 26; i++) {
        a[0] = String.fromCharCode(b + i);
        for (let j = 0; j < 26; j++) {
            a[1] = String.fromCharCode(c + j);
            for (let k = 0; k < 26; k++) {
                a[2] = String.fromCharCode(d + k);
                for (let l = 0; l < 26; l++) {
                    a[3] = String.fromCharCode(e + l);
                    for (let m = 0; m < 26; m++) {
                        a[4] = String.fromCharCode(f + m);
                        for (let n = 0; n < 26; n++) {
                            a[5] = String.fromCharCode(g + n);
                            for (let o = 0; o < 26; o++) {
                                a[6] = String.fromCharCode(h + o);
                                for (let p = 0; p < 26; p++) {
                                    a[7] = String.fromCharCode(i1 + p);
                                    testWord(a.join(''));
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

const word9 = function () {
    let a = new Array(10).join('a').split(''),
        b = 'a'.charCodeAt(), c = 'a'.charCodeAt(), d = 'a'.charCodeAt(),
        e = 'a'.charCodeAt(), f = 'a'.charCodeAt(), g = 'a'.charCodeAt(),
        h = 'a'.charCodeAt(), i1 = 'a'.charCodeAt(), j1 = 'a'.charCodeAt();
    for (let i = 0; i < 26; i++) {
        a[0] = String.fromCharCode(b + i);
        for (let j = 0; j < 26; j++) {
            a[1] = String.fromCharCode(c + j);
            for (let k = 0; k < 26; k++) {
                a[2] = String.fromCharCode(d + k);
                for (let l = 0; l < 26; l++) {
                    a[3] = String.fromCharCode(e + l);
                    for (let m = 0; m < 26; m++) {
                        a[4] = String.fromCharCode(f + m);
                        for (let n = 0; n < 26; n++) {
                            a[5] = String.fromCharCode(g + n);
                            for (let o = 0; o < 26; o++) {
                                a[6] = String.fromCharCode(h + o);
                                for (let p = 0; p < 26; p++) {
                                    a[7] = String.fromCharCode(i1 + p);
                                    for (let q = 0; q < 26; q++) {
                                        a[8] = String.fromCharCode(j1 + q);
                                        testWord(a.join(''));
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

const word10 = function () {
    let a = new Array(11).join('a').split(''),
        b = 'a'.charCodeAt(), c = 'a'.charCodeAt(), d = 'a'.charCodeAt(),
        e = 'a'.charCodeAt(), f = 'a'.charCodeAt(), g = 'a'.charCodeAt(),
        h = 'a'.charCodeAt(), i1 = 'a'.charCodeAt(), j1 = 'a'.charCodeAt(),
        k1 = 'a'.charCodeAt();
    for (let i = 0; i < 26; i++) {
        a[0] = String.fromCharCode(b + i);
        for (let j = 0; j < 26; j++) {
            a[1] = String.fromCharCode(c + j);
            for (let k = 0; k < 26; k++) {
                a[2] = String.fromCharCode(d + k);
                for (let l = 0; l < 26; l++) {
                    a[3] = String.fromCharCode(e + l);
                    for (let m = 0; m < 26; m++) {
                        a[4] = String.fromCharCode(f + m);
                        for (let n = 0; n < 26; n++) {
                            a[5] = String.fromCharCode(g + n);
                            for (let o = 0; o < 26; o++) {
                                a[6] = String.fromCharCode(h + o);
                                for (let p = 0; p < 26; p++) {
                                    a[7] = String.fromCharCode(i1 + p);
                                    for (let q = 0; q < 26; q++) {
                                        a[8] = String.fromCharCode(j1 + q);
                                        for (let r = 0; r < 26; r++) {
                                            a[9] = String.fromCharCode(k1 + r);
                                            testWord(a.join(''));
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

getWord();


const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(KoaStatic(__dirname + '/public'));

// router.get('/', (ctx, next) => {
//     ctx.body = "Hello Koa";
// });

// router.get('/getBanks', (ctx, next) => {
// 	getBanks(ctx, next);
// });
//router.get('/getBanks', getBanks);  //啊啊啊 大坑啊！！！上面这种写法就牺牲了！！！！！
router.use('', graphqlRouter.routes());
app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(5000);

console.log('graphQL server listen port: ' + 5000);