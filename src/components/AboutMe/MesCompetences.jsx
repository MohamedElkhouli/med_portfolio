import Card from '../card/Card'
export default function MesCompetences() {
    const mySkills= [
        {
            title : "React JS",
            img : "src/assets/imgs/react.png",
            disc:"#web"
        },
        {
            title : "Redux",
            img : "src/assets/imgs/redux.png",
            disc:"#web"
        },
        {
            title : "Laravel",
            img : "src/assets/imgs/laravel.png",
            disc:"#web"
        },
        {
            title : "MySQL",
            img : "src/assets/imgs/mysql.png",
            disc:"#web"
        },
        {
            title : "JavaScript",
            img : "src/assets/imgs/js.png",
            disc:"#web"
        },
        {
            title : "Node JS",
            img : "src/assets/imgs/node.png",
            disc:"#web"
        },
        {
            title : "PHP",
            img : "src/assets/imgs/php.png",
            disc:"#web"
        },
        {
            title : "MongoDB",
            img : "src/assets/imgs/mongodb.png",
            disc:"#web"
        },
        {
            title : "HTML / CSS / JS",
            img : "src/assets/imgs/htmlcssjs.png",
            disc:"#web"
        },
        {
            title : "Agile",
            img : "src/assets/imgs/agile.png",
            disc:"#Gestion"
        },
    ]
  return (
    <div className="mt-5 p-5">
        <h2 className="text-4xl text-blue-700">Mes Compétences</h2>
        <div className='flex gap-3 flex-wrap'>
            {mySkills.map((item,index)=>{
                return (<Card data={item} key={index}/>)
            })}
        
        </div>
    </div>
  )
}
