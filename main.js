computers=[];
_id=1;

function AddComputer(_system,_ram,_GB)
{
    computers.push(
        {
            com_id:_id,  
            com_system:_system,
            com_ram:_ram,  
            com_GB:_GB
        }
    );
    _id++;
}
function ComputerData(e)
{
    e.preventDefault();
    let system=document.querySelector("#system").value;
    let ram=document.querySelector("#ram").value;
    let GB=document.querySelector("#GB").value;
    swal("Əlavə edildi!", "Məlumat bazaya ötürüldü!", "success");
    console.log(system,ram,GB)
    AddComputer(system,ram,GB);

}
