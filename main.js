computers = [];
_id = 1;

function AddComputer(_system, _ram, _GB) {
    computers.push(
        {
            com_id: _id,
            com_system: _system,
            com_ram: _ram,
            com_GB: _GB
        }
    );
    _id++;
}
function ComputerData(e) {
    e.preventDefault();
    let system = document.querySelector("#system").value;
    let ram = document.querySelector("#ram").value;
    let GB = document.querySelector("#GB").value;
    swal("Əlavə edildi!", "Məlumat bazaya ötürüldü!", "success");
    console.log(system, ram, GB)
    AddComputer(system, ram, GB);
    WriteTHead();
    ClearInput();
    ShowData();
}
let tbody = document.querySelector("tbody");
let thead = document.querySelector("thead");
// HTML JSden gelirse JSX
// computers[1,2,3]
function ShowData() {
    let tr = `
        <tr>
            <th scope="row">${computers[computers.length - 1].com_id}</th>
            <td id="edit_system">${computers[computers.length - 1].com_system}</td>
            <td id="edit_ram">${computers[computers.length - 1].com_ram}</td>
            <td id="edit_GB">${computers[computers.length - 1].com_GB}</td>
            <td>
                <button class="btn btn-danger" onclick="Delete(this,${computers[computers.length - 1].com_id},event)">Sil</button>
                <button class="btn btn-success" onclick="Update(this,${computers[computers.length - 1].com_id},event)">Yenilə</button>
            </td>
        </tr>
        `

    tbody.innerHTML += tr;
}

function ClearInput() {
    let system = document.querySelector("#system");
    let ram = document.querySelector("#ram");
    let GB = document.querySelector("#GB");

    system.value = "";
    ram.value = "";
    GB.value = "";
}

function Delete(element, id, e) {
    e.preventDefault();
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                for (let i in computers) {
                    if (computers[i].com_id == id) {
                        computers.splice(i, 1);
                    }
                    tbody.removeChild(element.parentElement.parentElement);
                }
                swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                });
            } else {
                swal("Your imaginary file is safe!");
            }
        });
}
function WriteTHead() {
    let th = `
    <tr>
    <th scope="col">Sıra</th>
    <th scope="col">Əməliyyat Sistemi</th>
    <th scope="col">Ram</th>
    <th scope="col">Yaddaş(GB)</th>
    <th scope="col">Əməliyyatlar</th>
  </tr>
    `
    thead.innerHTML = th;
}
edit = true;
function Update(element, id, e) {
    e.preventDefault();
    if (edit) {
        tr = element.parentElement.parentElement;
        tr.querySelector("#edit_system").contentEditable = true;
        tr.querySelector("#edit_ram").contentEditable = true;
        tr.querySelector("#edit_GB").contentEditable = true;
        element.innerHTML = "Dəyşikliyi Yadda Saxla";
        edit = false;
    }
    else {
        tr.querySelector("#edit_system").contentEditable = false;
        tr.querySelector("#edit_ram").contentEditable = false;
        tr.querySelector("#edit_GB").contentEditable = false;
        element.innerHTML = "Dəyişiklik qeydə alındı";

        for (let i in computers) {
            if (computers[i].com_id == id) {
                computers[i].com_system = tr.querySelector("#edit_system").innerHTML;
                computers[i].com_ram = tr.querySelector("#edit_system").innerHTML;
                computers[i].com_GB = tr.querySelector("#edit_system").innerHTML;
            }
        }
        edit=true;
    }
}
