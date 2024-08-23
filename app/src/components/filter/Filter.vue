<template>

<div class="inner-main-header">
      <a class="nav-toggle" href="#" @click="toggleSidebar">
        <i class="material-icons">arrow_forward_ios</i>
      </a>
      <select class="custom-select">
        <option selected>Latest</option>
        <option value="1">Popular</option>
        <option value="2">Solved</option>
        <option value="3">Unsolved</option>
        <option value="4">No Replies Yet</option>
      </select>
      <select class="custom-select">
        <option value="" selected>Select a language</option>
        <option value="1">Ada</option>
        <option value="2">Assembly</option>
        <option value="3">Bash</option>
        <option value="4">Basic</option>
        <option value="5">C</option>
        <option value="6">C#</option>
        <option value="7">C++</option>
        <option value="8">Clojure</option>
        <option value="9">COBOL</option>
        <option value="10">Crystal</option>
        <option value="11">D</option>
        <option value="12">Dart</option>
        <option value="13">Elixir</option>
        <option value="14">Elm</option>
        <option value="15">Erlang</option>
        <option value="16">F#</option>
        <option value="17">Fortran</option>
        <option value="18">Go (Golang)</option>
        <option value="19">Groovy</option>
        <option value="20">Haskell</option>
        <option value="21">HTML/CSS</option>
        <option value="22">Java</option>
        <option value="23">JavaScript</option>
        <option value="24">Julia</option>
        <option value="25">Kotlin</option>
        <option value="26">Lisp</option>
        <option value="27">Lua</option>
        <option value="28">MATLAB</option>
        <option value="29">Objective-C</option>
        <option value="30">Pascal</option>
        <option value="31">Perl</option>
        <option value="32">PHP</option>
        <option value="33">Prolog</option>
        <option value="34">Python</option>
        <option value="35">R</option>
        <option value="36">Ruby</option>
        <option value="37">Rust</option>
        <option value="38">SAS</option>
        <option value="39">Scala</option>
        <option value="40">Shell</option>
        <option value="41">Smalltalk</option>
        <option value="42">SQL</option>
        <option value="43">Swift</option>
        <option value="44">Tcl</option>
        <option value="45">TypeScript</option>
        <option value="46">VBScript</option>
        <option value="47">VHDL</option>
        <option value="48">Visual Basic</option>
        <option value="49">Wolfram</option>
        <option value="50">Zig</option>
      </select>
    </div>
</template>

<script>

</script>

<style>
.inner-main-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.nav-toggle {
  display: none;
}

.custom-select {
  margin-right: 1rem;
  width: 200px;
  height: 50px;
  outline: none !important;
  border-radius: 0 !important;
}

.custom-select:focus {
  border-color: #dddddd;
  outline: 0;
  box-shadow: none !important;
}

@media screen and (max-width: 790px) {
  .custom-select {
    margin: 0 5px !important;
  }
}
</style>