
import './projectStyle.css'
function Projects() {
    return ( 
        <> 
        <div>
            <h2 className="text-4xl text-blue-800">My Projects</h2>
            <div className="flex flex-wrap cards">
                
            <a href="http://mohamedelkhouli.free.nf/project/phpecom/index.php" target="_blank" rel="noopener noreferrer" className="p-5 text-center flex flex-wrap text-2xl text-yellow-800 mt-9 gap-1  ">
                <div className="card">
                    <img width={500} src="src/assets/logos/ecommerce.png" className="rounded-xl" alt="" />
                     My First E-Commerce Store
                </div> 
                <p className='text-xl text-blue-gray-700'>
                Bienvenue sur MedStore, votre plateforme de e-commerce tout-en-un, conçue pour vous offrir une expérience d'achat en ligne fluide et intuitive tout en optimisant la gestion de vos produits. Notre site se distingue par ses fonctionnalités avancées qui permettent non seulement une navigation simplifiée pour vos achats, mais également une gestion complète et transparente de vos stocks.
                </p>
            </a>
            <a href="http://mohamedelkhouli.free.nf/" target="_blank" rel="noopener noreferrer" className="text-center flex flex-wrap text-2xl text-yellow-800 mt-9 gap-1  ">
                <div className="card">
                    <img width={500} src="src/assets/logos/image.png" className="rounded-xl" alt="" />
                     My Old Portfolio
                </div> 
            </a>
            </div>
        </div>
        </>
     );
}

export default Projects;