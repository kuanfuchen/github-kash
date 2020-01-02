let selReg = document.querySelector('.sel-reg');
let regionData = document.querySelector('.regionData');
let dataPresent = document.querySelector('.dataPresent');
let NameRegion = document.querySelector('.NameRegion');

// 變數

selReg.addEventListener('click', region);
// regionData.addEventListener('change', kagData);

// 監聽

const xhr = new XMLHttpRequest();
xhr.open('post', 'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97', true);
xhr.setRequestHeader('Content-type', 'application/json');
xhr.send();
// 傳送json資料

xhr.onload = function () {
    let areaName = JSON.parse(xhr.responseText);
    let areaNameRecord = areaName.result.records;
    // let areaNameLength = areaNameRecord.length;
    let area = new Set();
    areaNameRecord.forEach(item => area.add(item.Zone));
    // 地名資料加入area
    area.forEach(Zone => {
        let option = document.createElement('option');
        option.setAttribute('value', Zone);
        option.textContent = Zone;
        selReg.appendChild(option);
    });

    function firstStart() {


        NameRegion.textContent = '全部地區';
        let areaNameLength = areaNameRecord.length;
        let placeData = '';
        for (let i = 0; areaNameLength > i; i++) {

            placeData += `<div class="col-6 Regioncard mb-3 "><div class="border ">
                <div style=background-image:url("${areaNameRecord[i].Picture1}") class="region-bg text-white mb-2 " >
                <p class="bgPlace-text">${areaNameRecord[i].Name}</p>
                <p class="bgRegion-text">${areaNameRecord[i].Zone}</p>
            </div>
            <p>${areaNameRecord[i].Opentime}</P>
            <p>${areaNameRecord[i].Add}</P>
            <p>${areaNameRecord[i].Tel}</P>
    
            </div></div>`

        }
        dataPresent.innerHTML = placeData
    }
    firstStart();
}

function region() {
    let keyWord = this.value;
    NameRegion.textContent = keyWord;
    // console.log(keyWord)
    let areaName = JSON.parse(xhr.responseText);
    let areaNameRecord = areaName.result.records;
    let areaNameLength = areaNameRecord.length;
    let placeData = '';
    for (let i = 0; areaNameLength > i; i++) {
        if (areaNameRecord[i].Zone == keyWord) {
            placeData += `<div class="col-6 Regioncard mb-3 "><div class="border ">
            <div style=background-image:url("${areaNameRecord[i].Picture1}") class="region-bg text-white mb-2 " >
            <p class="bgPlace-text">${areaNameRecord[i].Name}</p>
            <p class="bgRegion-text">${areaNameRecord[i].Zone}</p>
        </div>
        <p>${areaNameRecord[i].Opentime}</P>
        <p>${areaNameRecord[i].Add}</P>
        <p>${areaNameRecord[i].Tel}</P>

        </div></div>`
        }
    }
    dataPresent.innerHTML = placeData

}