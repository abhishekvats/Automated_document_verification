const docList = [{
        docPurpose: 'Rashan Card',
        fieldsToVerify: [{
                fieldName: "Name",
                fieldType: "text"
            },
            {
                fieldName: "Age",
                fieldType: "number"
            },
            {
                fieldName: "Date of birth",
                fieldType: "text"
            }
        ]
    },
    {
        docPurpose: 'Adhar Card',
        fieldsToVerify: [{
                fieldName: "Name",
                fieldType: "text"
            },
            {
                fieldName: "Age",
                fieldType: "number"
            },
            {
                fieldName: "Date of birth",
                fieldType: "text"
            },
            {
                fieldName: "Address",
                fieldType: "text"
            },
            {
                fieldName: "Adhar Number",
                fieldType: "number"
            }
        ]
    }, {
        docPurpose: 'Pan Card',
        fieldsToVerify: [{
                fieldName: "field namename",
                fieldType: "text"
            },
            {
                fieldName: "field namename",
                fieldType: "text"
            },
            {
                fieldName: "field namename",
                fieldType: "text"
            }
        ]
    },
    {
        docPurpose: 'Lan Card',
        fieldsToVerify: [{
                fieldName: "field namename",
                fieldType: "text"
            },
            {
                fieldName: "field namename",
                fieldType: "text"
            },
            {
                fieldName: "field namename",
                fieldType: "text"
            }
        ]
    }, {
        docPurpose: 'Rashan Card',
        fieldsToVerify: [{
                fieldName: "field namename",
                fieldType: "text"
            },
            {
                fieldName: "field namename",
                fieldType: "text"
            },
            {
                fieldName: "field namename",
                fieldType: "text"
            }
        ]
    },
    {
        docPurpose: 'Adhar Card',
        fieldsToVerify: [{
                fieldName: "field namename",
                fieldType: "text"
            },
            {
                fieldName: "field namename",
                fieldType: "text"
            },
            {
                fieldName: "field namename",
                fieldType: "text"
            }
        ]
    }, {
        docPurpose: 'Pan Card',
        fieldsToVerify: [{
                fieldName: "field namename",
                fieldType: "text"
            },
            {
                fieldName: "field namename",
                fieldType: "text"
            },
            {
                fieldName: "field namename",
                fieldType: "text"
            }
        ]
    },
    {
        docPurpose: 'Lan Card',
        fieldsToVerify: [{
                fieldName: "field namename",
                fieldType: "text"
            },
            {
                fieldName: "field namename",
                fieldType: "text"
            },
            {
                fieldName: "field namename",
                fieldType: "text"
            }
        ]
    }
]

let currdoc = 'docpurpose0'

window.onload = (event) => {
    listofdoc()
}

function listofdoc() {
    let innerHTM = ''
    for (let i = 0; i < docList.length; i++) {
        let temp = `<div id="docpurpose${i}" onclick="docClick(${i})" class="cardlist">
        ${docList[i].docPurpose}</div>`
        innerHTM += temp
    }
    let temp1 = document.getElementById('docListId')
    temp1.innerHTML = (innerHTM)
    let curr = document.getElementById(currdoc)
    console.log(curr)
    curr.classList.add('currdoc')
    docClick(0)
}

function docClick(index) {

    let curr = document.getElementById(currdoc)
    console.log(curr)
    curr.classList.remove('currdoc')

    currdoc = 'docpurpose' + index

    curr = document.getElementById(currdoc)
    curr.classList.add('currdoc')

    let innerHTM = '';
    let len = docList[index].fieldsToVerify
    for (let i = 0; i < len.length; i++) {
        let temp = `<div class="cardlist">${len[i].fieldName}</div>`
        innerHTM += temp
    }
    let temp1 = document.getElementById('docfieldId')
    temp1.innerHTML = (innerHTM)
}

function addFieldClick(type) {
    let t = document.getElementById(type)
    if (t.innerText == 'Save Changes') {
        t.innerHTML = 'Add New Field'
    } else {
        t.innerHTML = 'Save Changes'
        console.log(t)
        let innerHTM = '';
    }
}

function adddocClick(type) {
    let t = document.getElementById(type)
    if (t.innerText == 'Save Changes') {
        t.innerHTML = 'Add New Document'

        listofdoc()
    } else {
        t.innerHTML = 'Save Changes'
        console.log(t)
        let innerHTM = `<div class="cardlist inpt">
                            Type of Document :  <br>
                            <input type="text">
                        </div>`;
        let temp1 = document.getElementById('docListId')
        temp1.innerHTML = innerHTM

    }
}