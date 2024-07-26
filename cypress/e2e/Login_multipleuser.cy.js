describe('login multiple user by loop', () => {
    it('loop for test multi user', () => {
        cy.fixture('infomation').then((data) => {
            cy.log(data); 
            const users = [
                { username: data.username, password: data.password, role: data.role },
                { username: data.username_header, password: data.password_header, role: data.role_header },
                { username: data.username_hrbp, password: data.password_hrbp, role: data.role_hrbp }
            ];

            users.forEach(user => {
                cy.login_user(user.username, user.password);
                cy.wait(2000);
                cy.logout();
            });
        });
    });
});