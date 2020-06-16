@extends('templates.template')

@section('content')

<h1 class="text-center">Visualizar</h1>

<div class="col-8 m-auto">
@php
    $user = $book->find($book->id)->relUsers;
@endphp
@if(empty($user))
<div class="alert alert-danger">
  Você não tem nenhum livro cadastrado.
</div>
@else
Titulo: {{$book->title}}<br>
Páginas: {{$book->pages}}<br>
Preço: R$ {{$book->price}}<br>
Autor: {{$user->name}}<br>
Email do autor: {{$user->email}}<br>

@endif

</div>
    
@endsection