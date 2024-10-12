import { SlBadge } from "react-icons/sl";
export const BadgePortfolio = () => {
    const myBadge=[
        {
            title:"Software Engineering Essentials",
            img:"src/assets/badges/software-engineering-essentials.png"
        },
        {
            title:"Software Engineering Essentials",
            img:"src/assets/badges/git-and-github-essentials.1.png"
        },
        {
            title:"Introduction to Cloud Computing",
            img:"src/assets/badges/introduction-to-cloud-computing (1).png"
        },
    ]
  return (
    <div className="p-20">
        <h2 className="text-4xl flex text-yellow-800 felx-col "><SlBadge />Badge Portfolio</h2>
        <div className="flex flex-wrap gap-5">
            {myBadge.map((ithem,index)=>{
                return (
                    <div className="mt-6" key={index}>
                        <img width={300} src={ithem.img} alt="logo" />
                        <h3 className="text-2xl mt-2 text-blue-800">{ithem.title}</h3>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
