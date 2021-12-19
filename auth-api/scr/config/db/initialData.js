import bcrypt from 'bcrypt';
import User from '../../modules/user/model/User';

export async function createInitialData(){
    await User.sync({force: true});

let password = await bcrypt.hash('123456');

    let firstUser = await User.create({
        name:'User Test',
        email:'testuser@gmail.com',
        password: password,    
    })
}