'use client';
import { RootState } from '@/store/store';
import React from 'react';
import { useSelector } from 'react-redux';

const page = () => {
    const data = useSelector((state: RootState) => state.singUp.data);

    return (
        <div className="m-auto">
            {data?.terms && (
                <div dangerouslySetInnerHTML={{ __html: data.terms }} />
            )}
        </div>
    )
}

export default page
