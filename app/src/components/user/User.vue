<template>
    <div class="container">
        <div class="row justify-content-center" id="perfil">
            <div class="__container-profile col-12 col-lg-12 mx-auto">

                <div class="my-4">
                    <div class="__user-main row mt-5 align-items-center justify-content-start">
                        <div class="__avatar col-md-1 text-center mb-4">
                            <img src="../../assets/avatar.svg" class="__avatar-sub" />
                        </div>
                        <div class="col __user-element">
                            <div class="row align-items-center">
                                <div class="col-md-6">
                                    <h4 class="mb-1 mt-2"><strong>Matheus Maldonado</strong></h4>
                                </div>
                            </div>

                            <div class="row mb-4">
                                <div class="col">
                                    <p class="small mb-0 text-muted">@matheusmaldonado</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form class="__form-inputs">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="firstname">Name</label>
                                <input type="text" id="firstname" class="form-control" placeholder="João" />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="lastname">Last name</label>
                                <input type="text" id="lastname" class="form-control" placeholder="Kleber" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputEmail4">Email</label>
                            <input type="email" class="form-control" id="inputEmail4"
                                placeholder="joao_kleber@gmail.com" />
                        </div>
                        <div class="caixaAlterarSenha">
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="novaSenha">Nova senha</label>
                                    <input type="password" id="novaSenha" class="form-control" placeholder="******" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="confirmarSenha">Confirmar senha</label>
                                    <input type="password" id="confirmarSenha" class="form-control"
                                        placeholder="******" />
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-success">Update</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>