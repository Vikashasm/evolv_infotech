


import PropTypes from 'prop-types';

const InfrastructureCard = ({ mapData }) => {
    return (
        <>
            <div className="flex gap-3">
                <span className="inline-flex items-center justify-center h-10 w-10 sm:w-14 sm:h-14 shrink-0 rounded-full border bg-[linear-gradient(to_right,#4208bc_0,#7141f9_51%,#4208bc_100%)]">
                    {mapData.icon}
                </span>


                <div>
                    <h2 className="font-semibold text-lg md:text-xl">Data Center Solutions & Services</h2>
                    <p className="font-normal text-base text-[#7f7f7f] mt-2">Building or migrating to
                        complex data centers seems easy and convenient with the best data center solutions and services.
                    </p>
                </div>
            </div>
        </>
    )
}

InfrastructureCard.propTypes = {
    mapData: PropTypes.any.isRequired, // Adjust the type as per your actual data structure
};

export default InfrastructureCard;
