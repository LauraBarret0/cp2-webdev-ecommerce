export default function Section({titulo, children}){
    return(
        <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{titulo}</h2>
            <h3 className="text-2xl font-bold mb-6">Produtos em destaque</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    		    {children}
            </div>
        </section>
    )
}