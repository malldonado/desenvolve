<template>
  <div class="container">
    <div class="__main-body p-0">
      <div class="__inner-wrapper">
        <div class="__inner-sidebar">
          <div class="__inner-sidebar-header">
            <button class="__btn-discussion btn has-icon btn-block" type="button" data-toggle="modal"
              data-target="#threadModal">
              <ion-icon name="add-circle-outline"></ion-icon> New Discussion
            </button>
          </div>
          <div class="__inner-sidebar-body p-0">
            <div class="p-3 h-100" data-simplebar="init">
              <div class="__simplebar-wrapper">
                <div class="__simplebar-mask">
                  <div class="__simplebar-offset">
                    <div class="__simplebar-content-wrapper">
                      <div class="__simplebar-content">
                        <nav class="__nav-pills nav-gap-y-1">
                          <a href="javascript:void(0)" class="__nav-pills-sub nav-link nav-link-faded has-icon active">
                            <ion-icon name="apps-outline"></ion-icon> All Threads
                          </a>
                          <a href="javascript:void(0)" class="__nav-pills-sub nav-link nav-link-faded has-icon">
                            <ion-icon name="calendar-outline"></ion-icon> Popular this week
                          </a>
                          <a href="javascript:void(0)" class="__nav-pills-sub nav-link nav-link-faded has-icon">
                            <ion-icon name="chatbubbles-outline"></ion-icon> Popular all time
                          </a>
                          <a href="javascript:void(0)" class="__nav-pills-sub nav-link nav-link-faded has-icon">
                            <ion-icon name="checkmark-circle-outline"></ion-icon> Solved
                          </a>
                          <a href="javascript:void(0)" class="__nav-pills-sub nav-link nav-link-faded has-icon">
                            <ion-icon name="close-circle-outline"></ion-icon> Unsolved
                          </a>
                          <a href="javascript:void(0)" class="__nav-pills-sub nav-link nav-link-faded has-icon">
                            <ion-icon name="timer-outline"></ion-icon> No replies yet
                          </a>
                          <a href="javascript:void(0)" class="__nav-pills-sub nav-link nav-link-faded has-icon">
                            <ion-icon name="help-outline"></ion-icon> Your question
                          </a>
                          <a href="javascript:void(0)" class="__nav-pills-sub nav-link nav-link-faded has-icon">
                            <ion-icon name="document-outline"></ion-icon> Your answers
                          </a>

                        </nav>


                      </div>
                    </div>
                  </div>
                </div>
                <div class="__simplebar-placeholder"></div>
              </div>
              <div class="__simplebar-horizontal">
                <div class="__simplebar-scrollbar"></div>
              </div>
              <div class="__simplebar-vertical">
                <div class="__simplebar-scrollbar"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="__inner-main">
          <div class="__inner-main-header">
            <a class="nav-link nav-icon rounded-circle nav-link-faded mr-3 d-md-none" href="#"
              data-toggle="inner-sidebar">
              <i class="material-icons">arrow_forward_ios</i>
            </a>
            <select class="__custom-select custom-select custom-select-sm w-auto mr-1">
              <option selected="">Latest</option>
              <option value="1">Popular</option>
              <option value="3">Solved</option>
              <option value="3">Unsolved</option>
              <option value="3">No Replies Yet</option>
            </select>
            <span class="input-icon input-icon-sm ml-auto w-auto">
              <input type="text" class="__input-search form-control form-control-sm shadow-none mb-4 mt-4"
                placeholder="Search..." />
            </span>
          </div>

          <div class="__inner-main-body p-2 p-sm-3 collapse forum-content show">
            <div class="card mb-2">
              <div class="card-body p-2 p-sm-3">
                <div class="media forum-item">
                  <a href="#" data-toggle="collapse" data-target=".forum-content">
                    <img src="../../assets/avatar.svg" class="mr-3 rounded-circle" width="50"
                      alt="User" />
                  </a>
                  <div class="media-body">
                    <div>
                      <a href="#" data-toggle="collapse" data-target=".forum-content" class="text-dark">Matheus
                        Maldonado</a>
                      <p class="text-muted small">Publicado há 5 minutos</p>
                    </div>
                    <a href="#" class="__text-title-discussion"><strong>Como declarar uma variável em php</strong></a>

                    <p class="text-secondary small">
                      lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                      lorem ipsum dolor sit amet
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="d-flex">
                        <div class="__rounded-pill-language rounded-pill bg-00ce81 text-white px-2 py-1 mr-2">golang
                        </div>
                        <div class="__rounded-pill-language rounded-pill bg-00ce81 text-white px-2 py-1 mr-2">php</div>
                        <div class="__rounded-pill-language rounded-pill bg-00ce81 text-white px-2 py-1 mr-2">java</div>
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
            <!-- Other cards -->
          </div>

          <div class="__inner-main-body p-2 p-sm-3 collapse forum-content">
            <a href="#" class="btn btn-light btn-sm mb-3 has-icon" data-toggle="collapse" data-target=".forum-content">
              <i class="fa fa-arrow-left mr-2"></i> Back
            </a>
            <div class="card mb-2">
              <div class="card-body">
                <div class="media forum-item">
                  <a href="javascript:void(0)" class="card-link">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="rounded-circle" width="50"
                      alt="User" />
                    <small class="d-block text-center text-muted">Newbie</small>
                  </a>
                  <div class="media-body ml-3">
                    <a href="javascript:void(0)" class="text-secondary">Mokrani</a>
                    <small class="text-muted ml-2">1 hour ago</small>
                    <h5 class="mt-1">Realtime fetching data</h5>
                    <div class="mt-3 font-size-sm">
                      <p>Hellooo :)</p>
                      <p>
                        I'm newbie with laravel and i want to fetch data from
                        database in realtime for my dashboard anaytics and i
                        found a solution with ajax but it dosen't work if any
                        one have a simple solution it will be helpful
                      </p>
                      <p>Thank</p>
                    </div>
                  </div>
                  <div class="text-muted small text-center">
                    <span class="d-none d-sm-inline-block"><i class="far fa-eye"></i> 19</span>
                    <span><i class="far fa-comment ml-2"></i> 3</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- Other cards -->
          </div>
        </div>
      </div>

      <div class="modal fade" id="threadModal" tabindex="-1" role="dialog" aria-labelledby="threadModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <form>
              <div class="modal-header d-flex align-items-center bg-primary text-white">
                <h6 class="modal-title mb-0" id="threadModalLabel">New Discussion</h6>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="form-group">
                  <label for="threadTitle">Title</label>
                  <input type="text" class="form-control" id="threadTitle" placeholder="Enter title" autofocus="" />
                </div>
                <textarea class="form-control summernote" style="display: none"></textarea>
                <div class="custom-file form-control-sm mt-3" style="max-width: 300px">
                  <input type="file" class="custom-file-input" id="customFile" multiple="" />
                  <label class="custom-file-label" for="customFile">Attachment</label>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-light" data-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-primary">Post</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>
