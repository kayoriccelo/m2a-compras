import styled from 'styled-components';


export const SCarrosselContainer = styled.div`
    position: relative;
    max-width: 100%;
    overflow: hidden;
    border-radius: 1rem;
`;

export const SCarrosselWrapper = styled.div`
    display: flex;
    transition: transform 0.5s ease-in-out;
    height: 35rem;
    padding: 1rem;
`;

export const SCarrosselItem = styled.div`
    flex: 0 0 calc(33.33% - 1.33rem);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 1rem;

    @media (max-width: 768px) {
        flex: 0 0 100%;
    }
`;

export const SCarrosselImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 1rem;
`;

export const SControlsContainer = styled.div`
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
    pointer-events: none;
`;

export const SControlButton = styled.button`
    background-color: rgba(255, 255, 255, 0.7);
    color: #333;
    border: none;
    padding: 0.5rem;
    font-size: 1.5rem;
    cursor: pointer;
    border-radius: 50%;
    transition: background-color 0.3s ease;
    pointer-events: auto;
    z-index: 1;

    &:hover {
        background-color: rgba(255, 255, 255, 0.9);
    }

    @media (max-width: 1024px) {
        display: none;
    }
`;

export const SIndicatorsContainer = styled.div`
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    gap: 8px;
`;

export const SIndicator = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: background-color 0.3s ease;

    &.active {
        background-color: #333;
    }
`;