import React, {MouseEvent} from 'react';


export interface ExpandedPetImageProps {
    imageUrl: string,
    onClose: () => void,
    show: boolean
}

function ExpandedPetImage(props: ExpandedPetImageProps) {

    function handleOverlayClick(e: MouseEvent<HTMLDivElement>){
        console.log("clicked")
        console.log(e)
        if (e.currentTarget.classList.contains('overlay')) {
            props.onClose();
        }
    }

    if(props.show){
        return (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50 overlay" onClick={(e) => handleOverlayClick(e)}>
                <div className="relative flex w-2/3 h-2/3 justify-center items-center  overflow-hidden ">
                    <img
                        src={props.imageUrl}
                        alt="Expanded Image"
                        className="rounded-md w-full h-full object-cover"
                    />
                    <button
                        onClick={props.onClose}
                        className="absolute h-8 w-24 top-2 right-2 text-gray-200 focus:outline-none bg-gray-800 rounded-md"
                    >
                        Close
                    </button>
                </div>
            </div>
        );
    }
};

export default ExpandedPetImage;