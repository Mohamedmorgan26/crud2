let mood = 'creat';
let title = document.getElementById('title');
let number = document.getElementById('number');
let category = document.getElementById('Category');
let clinic2 = document.getElementById('clinic2');
let clinic3 = document.getElementById('clinic3');
let time1 = document.getElementById('time1');
let time2 = document.getElementById('time2');
let time3 = document.getElementById('time3');
let besttime = document.getElementById('besttime');
let hospital1 = document.getElementById('hospital1');
let hospital2 = document.getElementById('hospital2');
let hospital3 = document.getElementById('hospital3');
let time4 = document.getElementById('time4');
let time5 = document.getElementById('time5');
let time6 = document.getElementById('time6');
let visit = document.getElementById('visit');
let notes1 = document.getElementById('notes1');
let count = document.getElementById('count');
let submit = document.getElementById('submit');
let tmp;




//creat product
let dataNew
if (localStorage.product != null) {
    dataNew = JSON.parse(localStorage.product)

} else {
    dataNew = [];
}


submit.onclick = function () {
    let newItem= {
        title: title.value.toLowerCase(),
        number: number.value,
        clinic2: clinic2.value,
        clinic3: clinic3.value,
        time1: time1.value,
        time2: time2.value,
        time3: time3.value,
        besttime: besttime.value,
        hospital1: hospital1.value,
        hospital2: hospital2.value,
        hospital3: hospital3.value,
        time4: time4.value,
        time5: time5.value,
        time6: time6.value,
        visit: visit.value,
        notes1: notes1.value,
        count: count.value,
        category: category.value.toLowerCase(),


    }
    //save localstorage
    localStorage.setItem('product', JSON.stringify(dataPro))

    clearData()
    showData()

}

//clean inputs

function clearData() {
    title.value = '';
    number.value = '';
    category.value = '';
    clinic2.value = '';
    clinic3.value = '';
    time1.value = '';
    time2.value = '';
    time3.value = '';
    besttime.value = '';
    hospital1.value = '';
    hospital2.value = '';
    hospital3.value = '';
    time4.value = '';
    time5.value = '';
    time6.value = '';
    visit.value = '';
    notes1.value = '';
    count.value = '';




}



//read
function showData()
{
    let table = '';
    for (let i = 0; i < dataNew.length; i++) {
        table += `
              <tr>
                        <td>${i}</td>
                        <td>${dataNew[i].title}</td>
                        <td>${dataNew[i].number}</td>
                        <td>${dataNew[i].category}</td>
                        <td>${dataNew[i].clinic2}</td>
                        <td>${dataNew[i].clinic3}</td>
                        <td>${dataNew[i].time1}</td>
                        <td>${dataNew[i].time2}</td>
                        <td>${dataNew[i].time3}</td>
                        <td>${dataNew[i].besttime}</td>
                        <td>${dataNew[i].hospital1}</td>
                        <td>${dataNew[i].hospital2}</td>
                        <td>${dataNew[i].hospital3}</td>
                        <td>${dataNew[i].time4}</td>
                        <td>${dataNew[i].time5}</td>
                        <td>${dataNew[i].time6}</td>
                        <td>${dataNew[i].visit}</td>
                        <td>${dataNew[i].notes1}</td>
                        <td>${dataNew[i].count}</td>
                        <td><button onclick="updateData(${i})" id="update">update</button></td>
                        <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
              </tr>
              `
    }

    document.getElementById('tbody').innerHTML = table;
    let btnDelete = document.getElementById('deleteAll');
    if (dataPro.length > 0) {
        btnDelete.innerHTML = `<button onclick="deleteAll()">delete All (${dataNew.length})</button>`
    }
    else {
        btnDelete.innerHTML = '';
    }
}
showData()

//delete
function deleteData(i)
{
    dataNew.splice(i, 1);
    localStorage.product = JSON.stringify(dataNew);
    showData()
}
function deleteAll() {
    localStorage.clear()
    dataNew.splice(0)
    showData()
}

//update
function updateData(i) {
    title.value = dataNew[i].title;
    number.value = dataNew[i].number;
    category.value = dataNew[i].category;
    clinic2.value = dataNew[i].clinic2;
    clinic3.value = dataNew[i].clinic3;
    time1.value = dataNew[i].time1;
    time2.value = dataNew[i].time2;
    time3.value = dataNew[i].time3;
    besttime.value = dataNew[i].besttime;
    hospital1.value = dataNew[i].hospital1;
    hospital2.value = dataNew[i].hospital2;
    hospital3.value = dataNew[i].hospital3;
    time4.value = dataNew[i].time4;
    time5.value = dataNew[i].time5;
    time6.value = dataNew[i].time6;
    visit.value = dataNew[i].visit;
    notes1.value = dataNew[i].notes1;
    count.value = dataNew[i].count;

    submit.innerHTML = 'Update';
    mood = 'update';
    tmp = i;
    scroll({
        top: 0,
        behavior: 'smooth',
    })
}


//search
let searchMood = 'title';

function getSearchMood(id) {
    let search = document.getElementById('search');
    if (id == 'searchTitle') {
        searchMood = 'title';

    }
    else {
        searchMood = 'category';

    }
    search.placeholder = 'Search By ' + searchMood;
    search.focus()
    search.value = '';
    showData()

}