const form=document.querySelector('form');
const image=document.querySelector('.img-container');
form.addEventListener('submit', (e)=>{
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
    image.innerHTML="";
    for(let movie of j){
        if(movie.show.image){
            
        
        let v=movie.show.image.medium;
        const img=document.createElement('img');
        img.src=v;
        image.appendChild(img);
    }

    }
}
