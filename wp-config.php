<?php

/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en « wp-config.php » et remplir les
 * valeurs.
 *
 * Ce fichier contient les réglages de configuration suivants :
 *
 * Réglages MySQL
 * Préfixe de table
 * Clés secrètes
 * Langue utilisée
 * ABSPATH
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/.
 *
 * @package WordPress
 */

// // ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
// /** Nom de la base de données de WordPress. */
define('DB_NAME', "lilibeaute2");

// // /** Utilisateur de la base de données MySQL. */
define('DB_USER', "root");

// // /** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', "");

// // /** Adresse de l’hébergement MySQL. */
define('DB_HOST', "localhost");




// /* Réglages MySQL - Votre hébergeur doit vous fournir ces informations. */

// /* Nom de la base de données de WordPress. */
// define('DB_NAME', 'dbs10399418');

// /* Utilisateur de la base de données MySQL. */
// define('DB_USER', 'dbu3956413');

// /* Mot de passe de la base de données MySQL. */
// define('DB_PASSWORD', 'Rayan13k14');

// /* Adresse de l’hébergement MySQL. */
// define('DB_HOST', 'db5012366319.hosting-data.io');







/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8mb4');

/**
 * Type de collation de la base de données.
 * N’y touchez que si vous savez ce que vous faites.
 */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '{}ijKrebw*pvS+lmF`}&g*Gu@6rm_ ^0.D*]R)@}ut(e w=kFlX+*[IfH^p9(9 +');
define('SECURE_AUTH_KEY',  '^Df:)e2Au3yrg3JEEut[62`[orTED9w9<5^)}C8gJ1SS>d, :s73|PSIF*FSB|Gs');
define('LOGGED_IN_KEY',    'Dx%vmD|%zinQN]UdKI}1</C[l,gId<O`~41K#}5D#Ic1$&IQ?AsVW!K~bh,s&u/X');
define('NONCE_KEY',        'V0._BCK]Y^ =][6|(k.qOJVP3C$yuVE= PhK:,1u8okMN7Jm[KCj)Jvs<Ox5WLde');
define('AUTH_SALT',        '^E/P 4Sw;+-ouuS]6y+Y[7~&-E#MDs){2tIsxZrQKCbm[q`&B8|a[!lY,eCG6[RN');
define('SECURE_AUTH_SALT', 'DO3]1z<`C1[XP*ZeisV5]]^%`C3DfDkxg@#e{T4]CeQ`_i)WY!k%NSGcoJ*g378>');
define('LOGGED_IN_SALT',   'HV%6YIq1J#f/=fP+h!|hku&Q|?,o)o-/mxuhm}ya<GC]$.KMEX`S_4$5;ew`wj(r');
define('NONCE_SALT',       '4GhHg]ffD/nIaz^8=bU;T1^=c1@SA%rr1B0L7wMWRL@Sf5iuu$5:z<W9Co}VU<)5');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';
define('WP_ALLOW_MULTISITE', true);


define('JETPACK_DEV_DEBUG', true);


/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

define('WP_HOME', 'http://localhost/wordpress');
define('WP_SITEURL', 'http://localhost/wordpress');
// update_option('home', 'http://localhost/wordpress');
// update_option('siteurl', 'http://localhost/wordpress');


/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if (!defined('ABSPATH'))
  define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
// define('WP_SITEURL', 'localhost/wordpress');
require_once(ABSPATH . 'wp-settings.php');
