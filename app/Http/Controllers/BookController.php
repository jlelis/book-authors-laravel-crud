<?php

namespace App\Http\Controllers;

use App\Http\Requests\BookRequest;
use App\Models\ModelBook;
use App\User;

class BookController extends Controller
{



    private $objUser;
    private $objBook;

    public function __construct()
    {
        $this->objUser = new User();
        $this->objBook = new ModelBook();
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //dd($this->objUser);
        //dd($this->objUser->find(1)->relBooks);
        //return view('teste');
        // $book = $this->objBook->all();
        // $book = $this->objBook->all()->sortBy('title');
        $book = $this->objBook->paginate(5);
        return view('books', compact('book'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // echo "Create Controller";
        $users = $this->objUser->all();
        return view('create', compact('users'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    // public function store(Request $request) //default
    public function store(BookRequest $request)
    {
        $cad = $this->objBook->create([

            'title' => $request->title,
            'pages' => $request->pages,
            'price' => $request->price,
            'id_user' => $request->id_user,
        ]);
        if ($cad) {
            return redirect('books');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // echo $id;
        $book = $this->objBook->find($id);
        return view('show', compact('book'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $book = $this->objBook->find($id);
        $users = $this->objUser->all();

        return view('create', compact('book', 'users'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(BookRequest $request, $id)
    {
        $this->objBook->where(['id' => $id])->update([

            'title' => $request->title,
            'pages' => $request->pages,
            'price' => $request->price,
            'id_user' => $request->id_user,
        ]);
        return redirect('books');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function destroy($id)
    {
        $del = $this->objBook->destroy($id);
        return ($del) ? "sim" : "não";
    }
}
