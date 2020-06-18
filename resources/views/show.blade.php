@extends('templates.template')

@section('content')

<h1 class="text-center">Visualizar</h1>

@php
$user = $book->find($book->id)->relUsers;
@endphp

<div class="col-8 m-auto border border-info rounded">

  Titulo: {{$book->title}}<br>
  Páginas: {{$book->pages}}<br>
  Preço: R$ {{$book->price}}<br>
  Autor: {{$user->name}}<br>
  Email do autor: {{$user->email}}<br>
</div>
<div class="text-center mt-3 mb-4">
  <a href="{{ url("books") }}">
    <button type="button" class="btn btn-warning">
      <-Voltar</button> </a> </div> @endsection