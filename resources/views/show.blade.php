@extends('templates.template')

@section('content')

<h1 class="text-center">Visualizar</h1>

<div class="col-8 m-auto">
  @php
  $user = $book->find($book->id)->relUsers;
  @endphp
  <div class="container">
    Titulo: {{$book->title}}<br>
    Páginas: {{$book->pages}}<br>
    Preço: R$ {{$book->price}}<br>
    Autor: {{$user->name}}<br>
    Email do autor: {{$user->email}}<br>
  </div>
  <div>
    <a href="{{ url("books") }}">
      <button type="button" class="btn btn-primary btn-block">
        <-Voltar</button> </div> </div> @endsection