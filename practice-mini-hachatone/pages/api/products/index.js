import { geAll } from "@/services/product"

export default function handler(req, res) {
    if(req.method === "GET"){
        const products = geAll();
        res.status(200).json(products);
    }
    return res.status(404).send();
  }
  