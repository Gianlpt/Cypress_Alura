describe('Teste Alura PIC', ()=> {

    beforeEach(() => {
        cy.visit ('http://alura-fotos.herokuapp.com/#/home');

    })

    it('Verifica mensagens de validação', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
       
        
    })


    it('Verifica mensagens de Email invalido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('teste');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
           
        
    })


    it('Verifica quantidade minima de caracteres da senha', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="email"]').type('teste@teste.com.br');
        cy.get('input[formcontrolname="fullName"]').type('Gian Lucas');
        cy.get('input[formcontrolname="userName"]').type('gianlpt');
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');    
      
        
    })

    it('Verifica quantidade minima de caracteres do nome', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="email"]').type('teste@teste.com.br');
        cy.get('input[formcontrolname="fullName"]').type('a');
        cy.get('input[formcontrolname="userName"]').type('gianlpt');
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
      
        
    })
    

    it('User somente com letra minuscula', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="email"]').type('teste@teste.com.br');
        cy.get('input[formcontrolname="fullName"]').type('Gian Lucas');
        cy.get('input[formcontrolname="userName"]').type('Gianlpt');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
        
    })


})
