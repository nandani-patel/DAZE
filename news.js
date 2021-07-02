// // https://gnews.io/api/v4/search?q=example&token=e2e8e4bd207048d4b670167bd7e06672

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://gnews.io/api/v4/search?q=example&token=e2e8e4bd207048d4b670167bd7e06672`, true);

let info = document.getElementById('info');

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            if (index == 0) {
                let newstop =
                 `<a href="${element["url"]}" target="_blank">
                     <div class="topnews">
                            <img src="${element["image"]}"></img>
                            <div class="topcontent">
                                <span style="font-size: 0.5cm;">${element["publishedAt"]}</span>
                                <header> ${element["title"]} </header>
                                <br>
                                <p> ${element["description"]} </p>
                            </div>
                        </div>
                 </a>`;
                newsHtml += newstop;
            }
            else if (index % 3 == 0) {
                let news1 = ` <a href="${element["url"]}" target="_blank"> <div class="gradcard" style="margin-right: 0px;"><img src="${element["image"]}"></img> <br> <br> <span style="font-size: 0.5cm;">${element["publishedAt"]}</span> <header> ${element["title"]} </header> <br> ${element["description"]}</div> </div></a>`;
                newsHtml += news1;
            }
            else {
                let news = `<a href="${element["url"]}" target="_blank">  <div class="gradcard"><img src="${element["image"]}"></img> <br> <br> <span style="font-size: 0.5cm;">${element["publishedAt"]}</span> <header> ${element["title"]} </header> <br> ${element["description"]}</div> </div> </a>`;
                newsHtml += news;
            }

        });
        info.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()


