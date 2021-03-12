import React, { FC } from "react";

export const PenIcon: FC = ()=> (
    <svg className="icon pen-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.95896 12.0615V12.0615C5.31539 12.7051 4.44252 13.0667 3.53237 13.0667H0.933319V10.4676C0.933319 9.55747 1.29487 8.6846 1.93845 8.04103V8.04103M5.95896 12.0615L12.5858 5.43473C13.3668 4.65368 13.3668 3.38735 12.5858 2.6063L11.3937 1.41421C10.6126 0.633164 9.34631 0.633164 8.56526 1.41421L1.93845 8.04103M5.95896 12.0615L1.93845 8.04103" stroke="currentColor" strokeLinejoin="round"/>
    </svg>
);
export const CheckmarkIcon: FC = ()=> (
    <svg className="icon checkmark-icon" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 5L5 9L13 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
export const SearchIcon: FC = ()=> (
    <svg className="icon search-icon" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="6.5" cy="6" r="5.5" stroke="currentColor"/>
        <path d="M13 12.5L10.5 10" stroke="currentColor" strokeLinecap="round"/>
    </svg>
);
export const CrossIcon: FC = ()=> (
    <svg className="icon search-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 0.5 L11.5 11.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.5 0.5 L0.5 11.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
export const DotsIcon: FC = ()=> (
    <svg className="icon dots-icon" width="2" height="14" viewBox="0 0 2 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="1" cy="1" r="1" fill="currentColor" />
        <circle cx="1" cy="11" r="1" fill="currentColor" />
    </svg>
);
export const StarIcon: FC = ()=> (
    <svg className="icon star-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 1L8.41641 5.58359H13L9.2918 8.41641L10.7082 13L7 10.1672L3.2918 13L4.7082 8.41641L1 5.58359H5.58359L7 1Z" stroke="currentColor" strokeLinejoin="round"/>
    </svg>
);
export const AddIcon: FC = ()=> (
    <svg className="icon add-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 1V8M8 15V8M8 8H15M8 8H1" stroke="currentColor" strokeLinecap="round"/>
    </svg>
);
export const ArrowLeftIcon: FC = ()=> (
    <svg className="icon arrow-left-icon" width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 10.5L1 5.5L6 0.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
export const ArrowRightIcon: FC = ()=> (
    <svg className="icon arrow-right-icon" width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 10.5L6 5.5L1 0.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
export const ArrowBottomIcon: FC = ()=> (
    <svg className="icon arrow-bottom-icon" width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5 1L5.5 6L0.5 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
export const ArrowLeftLineIcon: FC = ()=> (
    <svg className="icon arrow-left-line-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 11L1 6M1 6L6 1M1 6H11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
export const ArrowRightLineIcon: FC = ()=> (
    <svg className="icon arrow-right-line-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 11L11 6M11 6L6 1M11 6H1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
export const ClockIcon: FC = ()=> (
    <svg className="icon clock-icon" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="8.00002" cy="8.07692" rx="5.71429" ry="5.76923" stroke="currentColor"/>
        <path d="M8 5.76923V8.07693L9.71428 9.8077" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.5714 1.15385L14.9958 3.60152" stroke="currentColor" strokeLinecap="round"/>
        <path d="M3.56723 1.15385L1.14286 3.60152" stroke="currentColor" strokeLinecap="round"/>
    </svg>
);
export const CogIcon: FC = ()=> (
    <svg className="icon cog-icon" width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.50386 1.28351C7.81129 1.10783 8.18871 1.10783 8.49614 1.28351L14.4961 4.71208C14.8077 4.89012 15 5.22147 15 5.58032V12.4197C15 12.7785 14.8077 13.1099 14.4961 13.2879L8.49614 16.7165C8.18871 16.8922 7.81129 16.8922 7.50386 16.7165L1.50386 13.2879C1.19229 13.1099 1 12.7785 1 12.4197V5.58032C1 5.22147 1.19229 4.89012 1.50386 4.71208L7.50386 1.28351Z" stroke="currentColor" strokeLinejoin="round"/>
        <circle cx="8" cy="9" r="3" stroke="currentColor"/>
    </svg>
);
export const DeadlineIcon: FC = ()=> (
    <svg className="icon deadline-icon" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="8.00002" cy="8.07692" rx="5.71429" ry="5.76923" stroke="currentColor"/>
        <path d="M12.5714 1.15385L14.9958 3.60152" stroke="currentColor" strokeLinecap="round"/>
        <path d="M3.56723 1.15385L1.14286 3.60152" stroke="currentColor" strokeLinecap="round"/>
        <ellipse cx="10.2857" cy="8.07693" rx="1.14286" ry="1.15385" stroke="currentColor"/>
        <ellipse cx="5.7143" cy="8.07693" rx="1.14286" ry="1.15385" stroke="currentColor"/>
        <path d="M9.64285 11.5385C9.64285 11.2623 9.419 11.0385 9.14285 11.0385C8.86671 11.0385 8.64285 11.2623 8.64285 11.5385H9.64285ZM8.64285 11.5385V13.8462H9.64285V11.5385H8.64285Z" fill="currentColor"/>
        <path d="M7.35715 11.5385C7.35715 11.2623 7.13329 11.0385 6.85715 11.0385C6.581 11.0385 6.35715 11.2623 6.35715 11.5385H7.35715ZM6.35715 11.5385V13.8462H7.35715V11.5385H6.35715Z" fill="currentColor"/>
    </svg>
);
export const FlagIcon: FC = ()=> (
    <svg className="icon flag-icon" width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 11.1765V7.66588M1 7.66588V1.71725C1 1.71725 1.57143 1.17647 3.28571 1.17647C5 1.17647 5 2.25804 6.71429 2.25804C8.42857 2.25804 9 1.71725 9 1.71725V7.66588C9 7.66588 8.42857 8.20666 6.71429 8.20666C5 8.20666 5 7.12509 3.28571 7.12509C1.57143 7.12509 1 7.66588 1 7.66588Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
export const TextIcon: FC = ()=> (
    <svg className="icon text-icon" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 0.5V8.5M4.5 0.5H0.5V2.5M4.5 0.5H8.5V2.5M4.5 8.5H6M4.5 8.5H3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
export const TrashIcon: FC = ()=> (
    <svg className="icon trash-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 4H13M3 4L3.75196 12.2716C3.89244 13.8168 5.18803 15 6.73964 15H9.26036C10.812 15 12.1076 13.8168 12.248 12.2716L13 4M3 4H1M13 4H15" stroke="currentColor" strokeLinecap="round"/>
        <path d="M5 1.36363H11" stroke="currentColor" strokeLinecap="round"/>
    </svg>
);
export const UntrashIcon: FC = ()=> (
    <svg className="icon untrash-icon" width="15" height="22" viewBox="0 0 15 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.09914 11.0905C4.0459 10.5049 4.507 10 5.09503 10H12.905C13.493 10 13.9541 10.5049 13.9009 11.0905L13.248 18.2716C13.1076 19.8168 11.812 21 10.2604 21H7.73964C6.18803 21 4.89244 19.8168 4.75196 18.2716L4.09914 11.0905Z" stroke="currentColor" strokeLinecap="round"/>
        <path d="M11.5229 10V10C11.9916 9.76402 12.1802 9.19276 11.9442 8.72406L11.0224 6.89318C10.7741 6.39989 10.1728 6.20133 9.67954 6.4497L7.89318 7.3491C7.39989 7.59746 7.20134 8.19869 7.4497 8.69198L8.10827 10" stroke="currentColor"/>
        <path d="M1.099 9.54691L12.619 1.59146" stroke="currentColor" strokeLinecap="round"/>
        <path d="M3.29144 5.68246L8.22859 2.27298" stroke="currentColor" strokeLinecap="round"/>
    </svg>
);
export const SendIcon: FC = ()=> (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 11L11 6M11 6L6 1M11 6H5C2.79086 6 1 7.79086 1 10V11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
export const InfoIcon: FC = ()=> (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 9 L8 11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8" cy="6" r=".7" fill="currentColor" />
    </svg>
);
export const ClassFilledIcon: FC = ()=> (
    <svg className="icon class-filled-icon" width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 4C0 1.79086 1.79086 0 4 0H6C8.20914 0 10 1.79086 10 4V11.2338C10 12.0111 9.15203 12.4912 8.4855 12.0913L6.02899 10.6174C5.39563 10.2374 4.60437 10.2374 3.97101 10.6174L1.5145 12.0913C0.847972 12.4912 0 12.0111 0 11.2338V4Z" fill="currentColor"/>
    </svg>
);
export const ClassIcon: FC = ()=> (
    <svg className="icon class-icon" width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 5C1 2.79086 2.79086 1 5 1H7C9.20914 1 11 2.79086 11 5V12.2338C11 13.0111 10.152 13.4912 9.4855 13.0913L7.02899 11.6174C6.39563 11.2374 5.60437 11.2374 4.97101 11.6174L2.5145 13.0913C1.84797 13.4912 1 13.0111 1 12.2338V5Z" stroke="currentColor"/>
    </svg>
);