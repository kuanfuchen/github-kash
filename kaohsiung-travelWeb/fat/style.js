let btn = document.querySelector('.Bgresult');
let tableApp = document.querySelector('.tableApp')
let dataPar = JSON.parse(localStorage.getItem('dataName')) || [];
// 先將輸入過的資訊以陣列方式輸出版面
btn.addEventListener('click', fatCal, false);
updataTable(dataPar);


function fatCal(e) {
    let inputHeight = document.querySelector('.inputHeight').value;
    let inputWeight = document.querySelector('.inputWeight').value;
    let BMI = (Math.round(inputWeight / (inputHeight * inputHeight / 10000) * 10)) / 10;
    let data = {
        height: inputHeight,
        weight: inputWeight,
        BMIvalue: BMI
    };
    dataPar.push(data);
    updataTable(dataPar);
    localStorage.setItem('dataName', JSON.stringify(dataPar));

}

function updataTable(items) {

    let len = items.length;
    let str = '';
    for (let i = 0; i < len; i++) {
        if (items[i].BMIvalue >= 24) {
            str += `<table class="table">
            <tbody class=" ">
                <tr class="border ">
                    <th scope="row" class="text-danger">過胖</th>
                    <td><small>BMI : </small>${items[i].BMIvalue}</td>
                    <td><small>weight : </small>${items[i].height}cm</td>
                    <td><small>height : </small>${items[i].weight}kg</td>
                    <td><small>09-19-2017</small></td>
                </tr>
            </tbody>
        </table>`
        }
        if (18.5 <= items[i].BMIvalue && items[i].BMIvalue < 24) {
            str += `<table class="table">
            <tbody class=" ">
                <tr class="border ">
                    <th scope="row" class="text-primary">理想</th>
                    <td><small>BMI : </small>${items[i].BMIvalue}</td>
                    <td><small>weight : </small>${items[i].height}cm</td>
                    <td><small>height : </small>${items[i].weight}kg</td>
                    <td><small>09-19-2017</small></td>
                </tr>
            </tbody>
        </table>`
        }
        if (items[i].BMIvalue < 18.5) {
            str += `<table class="table">
            <tbody class=" ">
                <tr class="border ">
                    <th scope="row" class="text-success">過輕</th>
                    <td><small>BMI : </small>${items[i].BMIvalue}</td>
                    <td><small>weight : </small>${items[i].height}cm</td>
                    <td><small>height : </small>${items[i].weight}kg</td>
                    <td><small>09-19-2017</small></td>
                </tr>
            </tbody>
        </table>`
        }

    }
    tableApp.innerHTML = str

}