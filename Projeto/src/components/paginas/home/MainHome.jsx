import Card from "../../Card";

function MainHome() {
    let progBarraVendas = 15;
    return (
        <>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
                >
                    <h1 className="h2">Home</h1>
                </div>
                <div className="row">
                    <Card progBarra={progBarraVendas} icon="bi bi-cart-fill fs-2 me-3 rr-mb text-success " total="$25,000" nome="Total de Vendas" />
                    <Card total="100" nome="Total de Usuários" />
                </div>
            </main>
        </>
    );
}
export default MainHome;