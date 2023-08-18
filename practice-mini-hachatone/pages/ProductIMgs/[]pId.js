
export default function ProductIMgs(){
    return (<div>

    </div>)
}

export async function getStaticPaths() {
    const res = await fetch("/api/products/");
    const data = await res.json();
    const myProduct = data.products.map(p => {
        return { params: { pId: p.id.toString() } }
    })
    // console.log(myProduct)
    return {
        paths: myProduct,
        fallback: "blocking"
    }
  }
  
  
  export async function getStaticProps(context) {
    const { params } = context;
    // console.log(params);
    const res = await fetch(`/api/products/${params.pId}`);
    const data = await res.json();
    // console.log(data)
    const allData = data;
    return {
        props: {
            myData: allData
        },
        revalidate: 10
    }
  }