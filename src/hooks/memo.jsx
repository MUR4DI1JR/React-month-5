import React, {useEffect, useMemo, useState} from 'react';

function complexComputed(num){
    console.log("render");
    let i = 0;
    while (i < 1000000000) i++;
    return num * 2
}

const Memo = () => {
    const [count, setCount] = useState(23);
    const [colored, setColored] = useState(false);

    const styles = useMemo(() => ({
        color: colored ? 'darkred' : 'black'
    }), [colored]);

    // const computed = complexComputed(count);

    const computed = useMemo(() => {
        return complexComputed(count);
    }, [count]);

    useEffect(() => {
        console.log('Styles changed');
    }, [styles]);

    return (
        <div className="flex justify-center">
            <div>
                <p className={colored ? "font-bold text-rose-600" : "font-bold text-black"}>{computed}</p>
                <button className="mr-2 py-2 px-4 bg-gray-400 rounded-2xl text-white" onClick={()=> setCount(prev => prev + 1)}>+</button>
                <button className="mr-2 py-2 px-4 bg-gray-400 rounded-2xl text-white" onClick={() => setCount(prev => prev - 1)}>-</button>
                <button className="py-2 px-4 bg-gray-400 rounded-2xl text-white" onClick={() => setColored(prev => !prev)}>change color</button>
            </div>
        </div>
    );
};

export default Memo;