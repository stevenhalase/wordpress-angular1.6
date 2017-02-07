<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Macho Mil</title>

        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link href="https://fonts.googleapis.com/css?family=Merriweather:300,300i,400,400i,700,700i|Montserrat:400,700" rel="stylesheet">
		<link rel="stylesheet" href="/wp-content/themes/machomil/assets/libs/bootstrap-custom/css/bootstrap.min.css">
		<link rel="stylesheet" href="/wp-content/themes/machomil/assets/css/style.css">

        <?php wp_head(); ?>
	</head>

	<body ng-app="machomilApp" ng-controller="indexCtrl as iCtrl">
		<ui-view></ui-view>