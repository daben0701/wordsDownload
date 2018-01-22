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
    for (let i = 5; i <= 10; i++) {
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
    var re = await http.get("http://baicizhan.qiniucdn.com/word_audios/" + word + ".mp3", async (res, cb) => {
        if (res.statusCode !== 404) {
            let saveMedia = fs.createWriteStream('./dist/' + word + '.mp3');
            var save = await res.pipe(saveMedia);
            saveMedia.on('finish', () => {
                console.log(word + "  finish");
            });
        } else {
            console.log(word + "  not a word!");
        }
    });

    return re;
}

const increse = function (wordArray) {
    let val = 'a'.charCodeAt();
    switch (wordArray.length) {
        case 4:
            if (wordArray[3] === 'z') {
                if (wordArray[2] === 'z') {
                    if (wordArray[1] === 'z') {
                        if (wordArray[0] === 'z') {
                            return;
                        }
                    } else {
                        let val1 = wordArray[1].charCodeAt();
                        wordArray[1] = String.fromCharCode(val1 + 1);
                        wordArray[2] = String.fromCharCode(val);
                        wordArray[3] = String.fromCharCode(val);
                    }
                } else {
                    let val2 = wordArray[2].charCodeAt();
                    wordArray[2] = String.fromCharCode(val2 + 1);
                    wordArray[3] = String.fromCharCode(val);
                }
            } else {
                let val3 = wordArray[3].charCodeAt();
                wordArray[3] = String.fromCharCode(val3 + 1);
            }
            testWord(wordArray.join(''));
            break;
        case 5:
            if (wordArray[4] === 'z') {
                if (wordArray[3] === 'z') {
                    if (wordArray[2] === 'z') {
                        if (wordArray[1] === 'z') {
                            if (wordArray[0] === 'z') {
                                return;
                            }
                        } else {
                            let val1 = wordArray[1].charCodeAt();
                            wordArray[1] = String.fromCharCode(val1 + 1);
                            wordArray[2] = String.fromCharCode(val);
                            wordArray[3] = String.fromCharCode(val);
                            wordArray[4] = String.fromCharCode(val);
                        }
                    } else {
                        let val2 = wordArray[2].charCodeAt();
                        wordArray[2] = String.fromCharCode(val2 + 1);
                        wordArray[3] = String.fromCharCode(val);
                        wordArray[4] = String.fromCharCode(val);
                    }
                } else {
                    let val3 = wordArray[3].charCodeAt();
                    wordArray[3] = String.fromCharCode(val3 + 1);
                    wordArray[4] = String.fromCharCode(val);
                }
            }
            else {
                let val4 = wordArray[4].charCodeAt();
                wordArray[4] = String.fromCharCode(val4 + 1);
            }
            testWord(wordArray.join(''));
            break;
        case 6:
            if (wordArray[5] === 'z') {
                if (wordArray[4] === 'z') {
                    if (wordArray[3] === 'z') {
                        if (wordArray[2] === 'z') {
                            if (wordArray[1] === 'z') {
                                if (wordArray[0] === 'z') {
                                    return;
                                }
                            } else {
                                let val1 = wordArray[1].charCodeAt();
                                wordArray[1] = String.fromCharCode(val1 + 1);
                                wordArray[2] = String.fromCharCode(val);
                                wordArray[3] = String.fromCharCode(val);
                                wordArray[4] = String.fromCharCode(val);
                                wordArray[5] = String.fromCharCode(val);
                            }
                        } else {
                            let val2 = wordArray[2].charCodeAt();
                            wordArray[2] = String.fromCharCode(val2 + 1);
                            wordArray[3] = String.fromCharCode(val);
                            wordArray[4] = String.fromCharCode(val);
                            wordArray[5] = String.fromCharCode(val);
                        }
                    } else {
                        let val3 = wordArray[3].charCodeAt();
                        wordArray[3] = String.fromCharCode(val3 + 1);
                        wordArray[4] = String.fromCharCode(val);
                        wordArray[5] = String.fromCharCode(val);
                    }
                }
                else {
                    let val4 = wordArray[4].charCodeAt();
                    wordArray[4] = String.fromCharCode(val4 + 1);
                    wordArray[5] = String.fromCharCode(val);
                }
            } else {
                let val5 = wordArray[5].charCodeAt();
                wordArray[5] = String.fromCharCode(val5 + 1);
            }
            testWord(wordArray.join(''));
            break;
        case 7:
            if (wordArray[6] === 'z') {
                if (wordArray[5] === 'z') {
                    if (wordArray[4] === 'z') {
                        if (wordArray[3] === 'z') {
                            if (wordArray[2] === 'z') {
                                if (wordArray[1] === 'z') {
                                    if (wordArray[0] === 'z') {
                                        return;
                                    }
                                } else {
                                    let val1 = wordArray[1].charCodeAt();
                                    wordArray[1] = String.fromCharCode(val1 + 1);
                                    wordArray[2] = String.fromCharCode(val);
                                    wordArray[3] = String.fromCharCode(val);
                                    wordArray[4] = String.fromCharCode(val);
                                    wordArray[5] = String.fromCharCode(val);
                                    wordArray[6] = String.fromCharCode(val);
                                }
                            } else {
                                let val2 = wordArray[2].charCodeAt();
                                wordArray[2] = String.fromCharCode(val2 + 1);
                                wordArray[3] = String.fromCharCode(val);
                                wordArray[4] = String.fromCharCode(val);
                                wordArray[5] = String.fromCharCode(val);
                                wordArray[6] = String.fromCharCode(val);
                            }
                        } else {
                            let val3 = wordArray[3].charCodeAt();
                            wordArray[3] = String.fromCharCode(val3 + 1);
                            wordArray[4] = String.fromCharCode(val);
                            wordArray[5] = String.fromCharCode(val);
                            wordArray[6] = String.fromCharCode(val);
                        }
                    }
                    else {
                        let val4 = wordArray[4].charCodeAt();
                        wordArray[4] = String.fromCharCode(val4 + 1);
                        wordArray[5] = String.fromCharCode(val);
                        wordArray[6] = String.fromCharCode(val);
                    }
                } else {
                    let val5 = wordArray[5].charCodeAt();
                    wordArray[5] = String.fromCharCode(val5 + 1);
                    wordArray[6] = String.fromCharCode(val);
                }
            } else {
                let val6 = wordArray[6].charCodeAt();
                wordArray[6] = String.fromCharCode(val6 + 1);
            }
            testWord(wordArray.join(''));
            break;
        case 8:
            if (wordArray[7] === 'z') {
                if (wordArray[6] === 'z') {
                    if (wordArray[5] === 'z') {
                        if (wordArray[4] === 'z') {
                            if (wordArray[3] === 'z') {
                                if (wordArray[2] === 'z') {
                                    if (wordArray[1] === 'z') {
                                        if (wordArray[0] === 'z') {
                                            return;
                                        }
                                    } else {
                                        let val1 = wordArray[1].charCodeAt();
                                        wordArray[1] = String.fromCharCode(val1 + 1);
                                        wordArray[2] = String.fromCharCode(val);
                                        wordArray[3] = String.fromCharCode(val);
                                        wordArray[4] = String.fromCharCode(val);
                                        wordArray[5] = String.fromCharCode(val);
                                        wordArray[6] = String.fromCharCode(val);
                                        wordArray[7] = String.fromCharCode(val);
                                    }
                                } else {
                                    let val2 = wordArray[2].charCodeAt();
                                    wordArray[2] = String.fromCharCode(val2 + 1);
                                    wordArray[3] = String.fromCharCode(val);
                                    wordArray[4] = String.fromCharCode(val);
                                    wordArray[5] = String.fromCharCode(val);
                                    wordArray[6] = String.fromCharCode(val);
                                    wordArray[7] = String.fromCharCode(val);
                                }
                            } else {
                                let val3 = wordArray[3].charCodeAt();
                                wordArray[3] = String.fromCharCode(val3 + 1);
                                wordArray[4] = String.fromCharCode(val);
                                wordArray[5] = String.fromCharCode(val);
                                wordArray[6] = String.fromCharCode(val);
                                wordArray[7] = String.fromCharCode(val);
                            }
                        }
                        else {
                            let val4 = wordArray[4].charCodeAt();
                            wordArray[4] = String.fromCharCode(val4 + 1);
                            wordArray[5] = String.fromCharCode(val);
                            wordArray[6] = String.fromCharCode(val);
                            wordArray[7] = String.fromCharCode(val);
                        }
                    } else {
                        let val5 = wordArray[5].charCodeAt();
                        wordArray[5] = String.fromCharCode(val5 + 1);
                        wordArray[6] = String.fromCharCode(val);
                        wordArray[7] = String.fromCharCode(val);
                    }
                } else {
                    let val6 = wordArray[6].charCodeAt();
                    wordArray[6] = String.fromCharCode(val6 + 1);
                    wordArray[7] = String.fromCharCode(val);
                }
            } else {
                let val7 = wordArray[7].charCodeAt();
                wordArray[7] = String.fromCharCode(val7 + 1);
            }
            testWord(wordArray.join(''));
            break;
        case 9:
            if (wordArray[8] === 'z') {
                if (wordArray[7] === 'z') {
                    if (wordArray[6] === 'z') {
                        if (wordArray[5] === 'z') {
                            if (wordArray[4] === 'z') {
                                if (wordArray[3] === 'z') {
                                    if (wordArray[2] === 'z') {
                                        if (wordArray[1] === 'z') {
                                            if (wordArray[0] === 'z') {
                                                return;
                                            }
                                        } else {
                                            let val1 = wordArray[1].charCodeAt();
                                            wordArray[1] = String.fromCharCode(val1 + 1);
                                            wordArray[2] = String.fromCharCode(val);
                                            wordArray[3] = String.fromCharCode(val);
                                            wordArray[4] = String.fromCharCode(val);
                                            wordArray[5] = String.fromCharCode(val);
                                            wordArray[6] = String.fromCharCode(val);
                                            wordArray[7] = String.fromCharCode(val);
                                            wordArray[8] = String.fromCharCode(val);
                                        }
                                    } else {
                                        let val2 = wordArray[2].charCodeAt();
                                        wordArray[2] = String.fromCharCode(val2 + 1);
                                        wordArray[3] = String.fromCharCode(val);
                                        wordArray[4] = String.fromCharCode(val);
                                        wordArray[5] = String.fromCharCode(val);
                                        wordArray[6] = String.fromCharCode(val);
                                        wordArray[7] = String.fromCharCode(val);
                                        wordArray[8] = String.fromCharCode(val);
                                    }
                                } else {
                                    let val3 = wordArray[3].charCodeAt();
                                    wordArray[3] = String.fromCharCode(val3 + 1);
                                    wordArray[4] = String.fromCharCode(val);
                                    wordArray[5] = String.fromCharCode(val);
                                    wordArray[6] = String.fromCharCode(val);
                                    wordArray[7] = String.fromCharCode(val);
                                    wordArray[8] = String.fromCharCode(val);
                                }
                            }
                            else {
                                let val4 = wordArray[4].charCodeAt();
                                wordArray[4] = String.fromCharCode(val4 + 1);
                                wordArray[5] = String.fromCharCode(val);
                                wordArray[6] = String.fromCharCode(val);
                                wordArray[7] = String.fromCharCode(val);
                                wordArray[8] = String.fromCharCode(val);
                            }
                        } else {
                            let val5 = wordArray[5].charCodeAt();
                            wordArray[5] = String.fromCharCode(val5 + 1);
                            wordArray[6] = String.fromCharCode(val);
                            wordArray[7] = String.fromCharCode(val);
                            wordArray[8] = String.fromCharCode(val);
                        }
                    } else {
                        let val6 = wordArray[6].charCodeAt();
                        wordArray[6] = String.fromCharCode(val6 + 1);
                        wordArray[7] = String.fromCharCode(val);
                        wordArray[8] = String.fromCharCode(val);
                    }
                } else {
                    let val7 = wordArray[7].charCodeAt();
                    wordArray[7] = String.fromCharCode(val7 + 1);
                    wordArray[8] = String.fromCharCode(val);
                }
            }
            else {
                let val8 = wordArray[8].charCodeAt();
                wordArray[8] = String.fromCharCode(val8 + 1);
            }
            testWord(wordArray.join(''));
            break;
        case 10:
            if (wordArray[9] === 'z') {
                if (wordArray[8] === 'z') {
                    if (wordArray[7] === 'z') {
                        if (wordArray[6] === 'z') {
                            if (wordArray[5] === 'z') {
                                if (wordArray[4] === 'z') {
                                    if (wordArray[3] === 'z') {
                                        if (wordArray[2] === 'z') {
                                            if (wordArray[1] === 'z') {
                                                if (wordArray[0] === 'z') {
                                                    return;
                                                }
                                            } else {
                                                let val1 = wordArray[1].charCodeAt();
                                                wordArray[1] = String.fromCharCode(val1 + 1);
                                                wordArray[2] = String.fromCharCode(val);
                                                wordArray[3] = String.fromCharCode(val);
                                                wordArray[4] = String.fromCharCode(val);
                                                wordArray[5] = String.fromCharCode(val);
                                                wordArray[6] = String.fromCharCode(val);
                                                wordArray[7] = String.fromCharCode(val);
                                                wordArray[8] = String.fromCharCode(val);
                                                wordArray[9] = String.fromCharCode(val);
                                            }
                                        } else {
                                            let val2 = wordArray[2].charCodeAt();
                                            wordArray[2] = String.fromCharCode(val2 + 1);
                                            wordArray[3] = String.fromCharCode(val);
                                            wordArray[4] = String.fromCharCode(val);
                                            wordArray[5] = String.fromCharCode(val);
                                            wordArray[6] = String.fromCharCode(val);
                                            wordArray[7] = String.fromCharCode(val);
                                            wordArray[8] = String.fromCharCode(val);
                                            wordArray[9] = String.fromCharCode(val);
                                        }
                                    } else {
                                        let val3 = wordArray[3].charCodeAt();
                                        wordArray[3] = String.fromCharCode(val3 + 1);
                                        wordArray[4] = String.fromCharCode(val);
                                        wordArray[5] = String.fromCharCode(val);
                                        wordArray[6] = String.fromCharCode(val);
                                        wordArray[7] = String.fromCharCode(val);
                                        wordArray[8] = String.fromCharCode(val);
                                        wordArray[9] = String.fromCharCode(val);
                                    }
                                }
                                else {
                                    let val4 = wordArray[4].charCodeAt();
                                    wordArray[4] = String.fromCharCode(val4 + 1);
                                    wordArray[5] = String.fromCharCode(val);
                                    wordArray[6] = String.fromCharCode(val);
                                    wordArray[7] = String.fromCharCode(val);
                                    wordArray[8] = String.fromCharCode(val);
                                    wordArray[9] = String.fromCharCode(val);
                                }
                            } else {
                                let val5 = wordArray[5].charCodeAt();
                                wordArray[5] = String.fromCharCode(val5 + 1);
                                wordArray[6] = String.fromCharCode(val);
                                wordArray[7] = String.fromCharCode(val);
                                wordArray[8] = String.fromCharCode(val);
                                wordArray[9] = String.fromCharCode(val);
                            }
                        } else {
                            let val6 = wordArray[6].charCodeAt();
                            wordArray[6] = String.fromCharCode(val6 + 1);
                            wordArray[7] = String.fromCharCode(val);
                            wordArray[8] = String.fromCharCode(val);
                            wordArray[9] = String.fromCharCode(val);
                        }
                    } else {
                        let val7 = wordArray[7].charCodeAt();
                        wordArray[7] = String.fromCharCode(val7 + 1);
                        wordArray[8] = String.fromCharCode(val);
                        wordArray[9] = String.fromCharCode(val);
                    }
                }
                else {
                    let val8 = wordArray[8].charCodeAt();
                    wordArray[8] = String.fromCharCode(val8 + 1);
                    wordArray[9] = String.fromCharCode(val);
                }
            }
            else {
                let val9 = wordArray[9].charCodeAt();
                wordArray[9] = String.fromCharCode(val9 + 1);
            }
            testWord(wordArray.join(''));
            break;
    }
}

const testWord = function (word) {
    let wordArray = word.split('');
    http.get("http://baicizhan.qiniucdn.com/word_audios/" + word + ".mp3", (res, cb) => {
        if (res.statusCode !== 404) {
            let saveMedia = fs.createWriteStream('./dist/' + word + '.mp3');
            var save = res.pipe(saveMedia);
            saveMedia.on('finish', () => {
                console.log(word + "  finish");
                increse(wordArray);
            });
        } else {
            console.log(word + "  not a word!");
            increse(wordArray);
        }
    });
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
    testWord("aaaa");
}

const word5 = function () {
    testWord("aaaaa");
}

const word6 = function () {
    testWord("aaaaaa");
}

const word7 = function () {
    testWord("aaaaaaa");
}

const word8 = function () {
    testWord("aaaaaaaa");
}

const word9 = function () {
    testWord("aaaaaaaaa");
}

const word10 = function () {
    testWord("aaaaaaaaaa");
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