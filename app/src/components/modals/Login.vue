<template>
    <div class="modal fade modal-login" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-login-dialog" role="document">
        <div class="modal-content">
            <img class="sing-in-img-logo" src="../../resources/img/logo.png" alt="">
            <img class="sing-in-img" src="../../resources/img/sign-in.svg" alt="">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Bem-vindo a Desenvolve</h5>
                <button type="button" class="close sign-in-button-close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
            </div>
            <div class="modal-body">
                <div class="input-group mb-3">
                    <input type="email" class="form-control login-input" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1">
                </div>
                <div class="input-group mb-3">
                    <input type="password" class="form-control login-input" placeholder="Senha" id="basic-url" aria-describedby="basic-addon3">
                </div>
                <a href="profile.php" class="btn btn-secondary button-sign-in">Acessar</a>
                <button type="button" class="btn btn-outline-light sign-in-button-google"><i
                            class="fab fa-google icon-social-media"></i>Acessar com Google</button>
                <p class="p-sign-in">Ainda não tem uma conta?
                  <span href="register.php" id="modal-register" data-toggle="modal" data-target="#register-modal">Registrar</span>
                </p>
                <p href="forget.php" class="p-sign-in"><span>Esqueceu sua senha?</span></p>
            </div>
        </div>
    </div>
</div>
</template>