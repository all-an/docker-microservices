import UserRepository from "../repository/UserRepository";
import * as httpStatus from "../../../config/constants/httpStatus.js"

class UserService{
    async findByEmail(req){
        try {
            const { email } = req.params;
            this.validarDadosRequisicao(email);
        } catch (err) {
            
        }
    }

    validarDadosRequisicao(email){
        if(!email){
            throw new Error("User email was not informed");
        }
    }
}

export default new UserService();