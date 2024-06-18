<template>
    <div class="container">
        <div class="__main-body p-0">
            <div class="__inner-wrapper">
                <!-- Sidebar -->
                <div class="__inner-sidebar">
                    <div class="__inner-sidebar-header">
                        <button class="__btn-discussion btn btn-primary has-icon btn-block"
                            type="button" data-toggle="modal" data-target="#threadModal">
                            <ion-icon name="add-circle-outline"></ion-icon> Nova Discussão
                        </button>
                    </div>
                    <div class="__inner-sidebar-body p-0">
                        <div class="p-3 h-100" data-simplebar>
                            <nav class="__nav-pills nav-gap-y-1">
                                <a href="javascript:void(0)"
                                    class="__nav-pills-sub nav-link nav-link-faded has-icon active">
                                    <ion-icon name="apps-outline"></ion-icon> Todos os Tópicos
                                </a>
                                <a href="javascript:void(0)"
                                    class="__nav-pills-sub nav-link nav-link-faded has-icon">
                                    <ion-icon name="calendar-outline"></ion-icon> Populares esta semana
                                </a>
                                <a href="javascript:void(0)"
                                    class="__nav-pills-sub nav-link nav-link-faded has-icon">
                                    <ion-icon name="chatbubbles-outline"></ion-icon> Populares de todos os tempos
                                </a>
                                <a href="javascript:void(0)"
                                    class="__nav-pills-sub nav-link nav-link-faded has-icon">
                                    <ion-icon name="checkmark-circle-outline"></ion-icon> Resolvidos
                                </a>
                                <a href="javascript:void(0)"
                                    class="__nav-pills-sub nav-link nav-link-faded has-icon">
                                    <ion-icon name="close-circle-outline"></ion-icon> Não resolvidos
                                </a>
                                <a href="javascript:void(0)"
                                    class="__nav-pills-sub nav-link nav-link-faded has-icon">
                                    <ion-icon name="timer-outline"></ion-icon> Sem respostas ainda
                                </a>
                                <a href="javascript:void(0)"
                                    class="__nav-pills-sub nav-link nav-link-faded has-icon">
                                    <ion-icon name="help-outline"></ion-icon> Sua pergunta
                                </a>
                                <a href="javascript:void(0)"
                                    class="__nav-pills-sub nav-link nav-link-faded has-icon">
                                    <ion-icon name="document-outline"></ion-icon> Suas respostas
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>

                <!-- Main Content -->
                <div class="__inner-main">
                    <div class="__inner-main-header">
                        <a class="nav-link nav-icon rounded-circle nav-link-faded mr-3 d-md-none" href="#"
                            data-toggle="inner-sidebar">
                            <i class="material-icons">arrow_forward_ios</i>
                        </a>
                        <select class="__custom-select custom-select custom-select-sm w-auto mr-1">
                            <option selected>Últimos</option>
                            <option value="1">Populares</option>
                            <option value="3">Resolvidos</option>
                            <option value="3">Não resolvidos</option>
                            <option value="3">Sem respostas ainda</option>
                        </select>
                        <span class="input-icon input-icon-sm ml-auto w-auto">
                            <input type="text" class="__input-search form-control form-control-sm shadow-none mb-4 mt-4"
                                placeholder="Buscar..." />
                        </span>
                    </div>

                    <div class="__inner-main-body p-2 p-sm-3 collapse forum-content show">
                        <div class="card mb-2">
                            <div class="card-body p-2 p-sm-3">
                                <div class="media forum-item">
                                    <a href="#" data-toggle="collapse" data-target=".forum-content">
                                        <!-- <img src="avatar.svg" class="mr-3 rounded-circle" width="50" alt="User" /> -->
                                    </a>
                                    <div class="media-body">
                                        <div>
                                            <a href="#" data-toggle="collapse" data-target=".forum-content"
                                                class="text-dark">Matheus Maldonado</a>
                                            <p class="text-muted small">Publicado há 5 minutos</p>
                                        </div>
                                        <a href="#" class="__text-title-discussion"><strong>Como declarar uma
                                                variável em PHP?</strong></a>
                                        <p class="text-secondary small">
                                            Para declarar uma variável em PHP, você usa o sinal de dólar ($) seguido
                                            pelo nome da variável e uma atribuição opcional de um valor. Por exemplo:
                                        </p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="d-flex">
                                                <div
                                                    class="__rounded-pill-language rounded-pill bg-00ce81 text-white px-2 py-1 mr-2">golang</div>
                                                <div
                                                    class="__rounded-pill-language rounded-pill bg-00ce81 text-white px-2 py-1 mr-2">php</div>
                                                <div
                                                    class="__rounded-pill-language rounded-pill bg-00ce81 text-white px-2 py-1 mr-2">java</div>
                                            </div>
                                            <div class="text-muted text-center align-self-end">
                                                <span class="__span-eye d-none d-sm-inline-block">
                                                    <i class="far fa-eye __post-icon"></i> 19
                                                </span>
                                                <span><i class="far fa-comment __post-icon"></i> 3</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Outros cartões de tópicos -->
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="threadModal" tabindex="-1" role="dialog" aria-labelledby="threadModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <form>
                        <div class="modal-header d-flex align-items-center bg-primary text-white">
                            <h6 class="modal-title mb-0" id="threadModalLabel">Nova Discussão</h6>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="threadTitle">Título</label>
                                <input type="text" class="form-control" id="threadTitle"
                                    placeholder="Digite o título" autofocus />
                            </div>
                            <textarea class="form-control summernote" style="display: none"></textarea>
                            <div class="custom-file form-control-sm mt-3" style="max-width: 300px">
                                <input type="file" class="custom-file-input" id="customFile" multiple />
                                <label class="custom-file-label" for="customFile">Anexar arquivos</label>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-light" data-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary">Postar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // Se houver dados para inicializar, pode ser colocado aqui
        };
    },
    methods: {
        search() {
            // Lógica de busca
        }
    }
};
</script>

<style>
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.__main-body {
    display: flex;
}

.__inner-wrapper {
    display: flex;
    width: 100%;
}

.__inner-sidebar {
    width: 250px;
    border-right: 1px solid #ddd;
}

.__inner-main {
    flex: 1;
}

.__inner-main-header {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
}

.__input-search {
    width: 100%;
    max-width: 300px;
}

.__inner-main-body {
    padding: 20px;
}

.__btn-discussion {
    margin-bottom: 20px;
}

.__nav-pills-sub {
    display: flex;
    align-items: center;
    padding: 10px;
    color: #555;
    text-decoration: none;
}

.__nav-pills-sub.active {
    background-color: #007bff;
    color: white;
}

.__rounded-pill-language {
    font-size: 12px;
}

.__post-icon {
    margin-right: 5px;
}

.modal-body .form-control,
.modal-body .custom-file {
    margin-bottom: 10px;
}
</style>
