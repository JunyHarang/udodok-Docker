package udodog.goGetterServer.model.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QSharingBoardLike is a Querydsl query type for SharingBoardLike
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QSharingBoardLike extends EntityPathBase<SharingBoardLike> {

    private static final long serialVersionUID = 911353249L;

    public static final QSharingBoardLike sharingBoardLike = new QSharingBoardLike("sharingBoardLike");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final NumberPath<Long> sharingBoardId = createNumber("sharingBoardId", Long.class);

    public final NumberPath<Long> userId = createNumber("userId", Long.class);

    public QSharingBoardLike(String variable) {
        super(SharingBoardLike.class, forVariable(variable));
    }

    public QSharingBoardLike(Path<? extends SharingBoardLike> path) {
        super(path.getType(), path.getMetadata());
    }

    public QSharingBoardLike(PathMetadata metadata) {
        super(SharingBoardLike.class, metadata);
    }

}

