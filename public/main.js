let n = 0;

getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', `/page${n+1}.json`);
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const array = JSON.parse(request.response);
                console.log(array)
                array.forEach(item => {
                    const li = document.createElement("li");
                    li.textContent = item.id
                    xxx.appendChild(li)
                })
                n += 1
            }
        }
    }
    request.send()
}


getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/4.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log("request.response")
                console.log(request.response)
                const object = JSON.parse(request.response)
                console.log("object")
                console.log(object)
            }
        }
    }
    request.send()
}


getXml.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const dom = request.responseXML;
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            }
        }
    }
    request.send()
}

getHtml.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '2.html')
    request.onload = () => {
        const html = document.createElement('html')
        html.innerHTML = request.response
        document.body.appendChild(html)
    }
    request.onerror = () => {
        console.log("请求失败")
    }
    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/2.js')
    request.onload = () => {
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => {
        console.log("我失败啦")
    }
    request.send()
}

getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/style.css');
    //下载完成，但不知道成功的是 2xx 还是失败 4xx 5xx
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                //创建style标签
                const style = document.createElement('style')
                    //填写style内容
                style.innerHTML = request.response
                    //插到头里面


                document.head.appendChild(style)
            } else {
                alert("css加载错误")
            }
        }
    }
    request.send();
};