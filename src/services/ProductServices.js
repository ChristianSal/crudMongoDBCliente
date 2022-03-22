import axios from 'axios';

export class ProductService{

    baseUrl="https://cs-rest-api-tap.herokuapp.com/";

    create(product){
        return axios.post(this.baseUrl+"product/",product).then(res =>res.data);
    }

    readAll(product){
        return axios.get(this.baseUrl).then(res =>res.data);
    }

    update(product){
        return axios.put(this.baseUrl+"product/"+product._id,product).then(res =>res.data);
    }

    delete(product){
        return axios.delete(this.baseUrl+"product/"+id).then(res =>res.data);
    }
}