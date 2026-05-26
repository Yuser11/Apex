import img404 from '../../../assets/img/erro-404.webp'

function MainErro404() {
  
    return (
        <>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
                >
                    <h1 className="h2">Página não encontrada</h1>
                </div>
                <img className='img-fluid' src={img404} alt="Imagem de página não encontrada." />
            </main>
        </>
    );
}
export default MainErro404;