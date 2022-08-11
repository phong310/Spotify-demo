import React from 'react'
import { Songs } from '../context/context'
import { useContext, useState, useEffect } from 'react'
export default function () {
    const { DataSongs, handleSetSong, song } = useContext(Songs)
    const [idSong, setIdSong] = useState(0);

    const handlePlaySong = (idSong) => {
        setIdSong(idSong);
        handleSetSong(idSong)
    }

    useEffect(()=> {
        setIdSong(song.id)
    },[song])
    
    return (
        <div className="col-span-2 overflow-y-scroll">
            <table className="table-auto w-full">
                <thead className="text-white h-12">
                    <tr>
                        <th>#</th>
                        <th className="text-left">Titles</th>
                        <th className="w-[10%]">Author</th>
                        <th className="w-[10%]"><i className="fa fa-download"></i></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        DataSongs.map((song, index) => (
                            <tr
                                key={index}
                                className={`bg-slate-800 h-12 text-gray-500 hover:bg-slate-600 cursor-pointer ${idSong === song.id && 'text-teal-400'}`}
                                onClick={() => handlePlaySong(song.id)}
                            >
                                <td className="text-center">{index + 1}</td>
                                <td>{song.name}</td>
                                <td className="text-center">{song.author}</td>
                                <td className="text-center">
                                    <a href={song.url}>
                                        <i className="fa fa-download"></i>
                                    </a>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
