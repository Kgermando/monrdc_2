export interface BusinessData {
    societe?: string;
    logo?: any;
    nom?: string;
    tel?: string;
    tel2?: string;
    tel3?: string;
    email?: string;
    adresse?: string;
    quartier?: string;
    commune?: string;
    ville?: string;
    province?: string;
    category?: string;
    sousCategory?: string;
    siteWeb?: string;
    sicursale?: string;
    published?: Date;
    id?: string;
}

export const storedColumns =
    ['societe', 'logo', 'nom', 'tel', 'tel2', 'tel3', 'email',
        'adresse', 'quartier', 'commune', 'ville', 'province',
        'category', 'sousCategory', 'siteWeb', 'sicursale', 'published'];

export const displayedColumns =
    ['Société', 'Logo', 'Nom de la société', 'Téléphone', 'Téléphone 2', 'Téléphone 3', 'Email',
        'Adresse', 'Quartier', 'Commune', 'Ville', 'Province',
        'Categories', 'Sous Categories', 'Site Web', 'Sicursale', 'Date de Publication'];
