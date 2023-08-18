import { useRouter } from "next/router"
export default function() {
    const router = useRouter();
    const {cid} = router.query;
    return (<div>
        <h1>This the child of dynamic Directory So you can check = {cid}</h1>
    </div>)
}