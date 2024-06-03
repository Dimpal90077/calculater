const form=document.querySelector('form');
const image=document.querySelector('.img-container');
form.addEventListener('click', (e)=>{
    e.preventDefault();
    let d=form.querySelector('input').value;
    console.log(d);
    tvmaze(d);

})
async function tvmaze(d){
    const s= await fetch(`https://api.tvmaze.com/search/shows?q=${d}`)
    const j=await s.json();
    // console.log(j);
    makeimage(j);


}
function makeimage(j){
    for(let movie of j){
        let v=j.show.image.medium;
        const img=document.createElement('img');
        img.v=v;
        image.appendChild(img);

    }
}