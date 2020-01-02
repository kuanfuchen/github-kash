let selReg = document.querySelector('.sel-reg');
let regionData = document.querySelector('.regionData');
let NameRegion = document.querySelector('.NameRegion');
let dataPresent = document.querySelector('.dataPresent');
let areaNameRecord = {};

selReg.addEventListener('change', region);
// 監聽
const xhr = new XMLHttpRequest();
xhr.open('get', 'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97', true);
xhr.setRequestHeader('Content-type', 'application/json')
xhr.send();
// 載入json資料
xhr.onload = function () {
    let areaName = JSON.parse(xhr.responseText);
    // console.log(areaName);
    areaNameRecord = areaName.result.records;
    let len = areaNameRecord.length;
    // console.log(len);
    let area = new Set();
    areaNameRecord.forEach(element => area.add(element.Zone));
    area.forEach(Zone => {
        let option = document.createElement('option');
        option.setAttribute('value', Zone);
        option.textContent = Zone;
        selReg.appendChild(option);
    });
    const data = [];
    for (let i = 0; len > i; i++) {
        data.push(areaNameRecord);


    }
    // 新增地區頁數
    region(data, len);
    // pagation(areaNameRecord, 1);

};


function region(data, len) {
    let keyword = this.value;
    console.log(data);

    let str = '';
    NameRegion.textContent = keyword;
    console.log(len);
    console.log(len);
    for (let i = 0; len > i; i++) {



        str += `<div class="col-6 Regioncard mb-3 "><div class="border ">
        <div style=background-image:url("${data[i].Picture1}") class="region-bg text-white mb-2 " >
        <p class="bgPlace-text">${data[i].Name}</p>
        <p class="bgRegion-text">${data[i].Zone}</p>
        </div>
        <p>${data[i].Opentime}</P>
        <p>${data[i].Add}</P>
        <p>${data[i].Tel}</P>
        </div></div>`


    }
    dataPresent.innerHTML = str
}





// function pagation(recordLen, nowPage) {
//     // console.log(nowPage)
//     console.log(recordLen.Zone);
//     const dataTotal = recordLen.length;
//     // console.log(dataTotal);
//     let perPage = 10;
//     let startData = 0;
//     // 每頁10個檔案
//     let totoalPage = Math.ceil(dataTotal / perPage);
//     // 撈出的檔案全部的頁數
//     let currentPage = nowPage;
//     if (currentPage > totoalPage) {
//         currentPage = totoalPage;
//     }
//     // 當前頁數不能大於全部頁數
//     let dataMin = (perPage * currentPage) - currentPage + 1;
//     let dataMax = perPage * currentPage;
//     // 當頁取出的最小與最大資料數
//     const data = [];
//     // 重新放入資料
//     for (let i = 0; dataTotal < i; i++) {
//         let numData = startData + 1
//         if (numData >= dataMin && numData <= dataMax) {
//             data.push(recordLen.Zone)
//         }
//     }
//     // recordLen.forEach((item, startData) => {
//     //     const numData = startData + 1;
//     //     if (numData >= dataMin && numData <= dataMax) {
//     //         console.log(item);
//     //         data.push(item);
//     //     }
//     //     // 推入新的資料
//     // });
//     console.log(data)
//     const page = {
//         currentPage,
//         totoalPage,
//         // hasPage: currentPage > 1,
//         // hasNext: currentPage < dataTotal
//     }
//     region(data);
//     // pageSel(page);
// }